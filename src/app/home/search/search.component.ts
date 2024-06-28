import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, startWith, switchMap } from 'rxjs';
import { SearchService } from './state/search.service';
import { GetMupltipleResponse } from '../../models/search.model';
import { University } from '@app/models/university.model';

@Component({
  selector: 'home-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('containerElement', { static: true })
  containerElement!: ElementRef;

  universityForm = new FormGroup({
    university: new FormControl(''),
  });
  universities: University[] = [];
  isInputFocused: boolean = false;

  constructor(
    private searchService: SearchService,
    private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.universityForm.valueChanges
      .pipe(
        debounceTime(350),
        startWith({
          university: '',
        }),
        switchMap(({ university }) =>
          this.searchService.get(university ?? '', 4),
        ),
      )
      .subscribe((response: GetMupltipleResponse<University>) => {
        console.log(response);
        this.universities = response.result;
      });
  }

  ngOnDestroy(): void {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if(!this.containerElement.nativeElement.contains(event.target)) {
      this.isInputFocused = false;
    } else {
      this.isInputFocused = true;
    }
  }

  toggleInputFocused() {
    this.isInputFocused = !this.isInputFocused;
  }
}
