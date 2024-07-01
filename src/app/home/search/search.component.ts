import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, startWith, switchMap } from 'rxjs';
import { SearchService } from './state/search.service';
import { GetMupltipleResponse } from '../../models/search.model';
import { University } from '@app/models/university.model';
import { RouterLink } from '@angular/router';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'home-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('containerElement', { static: true })
  containerElement!: ElementRef;

  universityForm = new FormGroup({
    university: new FormControl(''),
  });
  universities: University[] = [];
  isInputFocused: boolean = false;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.universityForm.valueChanges
      .pipe(
        debounceTime(350),
        startWith({
          university: '',
        }),
        switchMap(({ university }) =>
          this.searchService.get(university ?? '', 4)
        )
      )
      .subscribe((response: GetMupltipleResponse<University>) => {
        this.universities = response.result;
      });
  }

  ngOnDestroy(): void {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.containerElement.nativeElement.contains(event.target)) {
      this.isInputFocused = false;
    } else {
      this.isInputFocused = true;
    }
  }

  toggleInputFocused() {
    this.isInputFocused = !this.isInputFocused;
  }
}
