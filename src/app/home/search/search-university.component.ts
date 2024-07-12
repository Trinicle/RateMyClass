import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, of, startWith, switchMap } from 'rxjs';
import { SearchUniversityService } from './state/search-university.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchUniversityQuery } from './state/search-university.query';
import { SearchUniversityItemState } from './state/search-university.store';

@Component({
  selector: 'search-university',
  templateUrl: './search-university.component.html',
  styleUrls: ['./search-university.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
})
export class SearchUniversityComponent implements OnInit, OnDestroy {
  @ViewChild('containerElement', { static: false })
  containerElement!: ElementRef;

  universityForm = new FormGroup({
    university: new FormControl(''),
  });
  universities$: Observable<SearchUniversityItemState> = of();
  isInputFocused: boolean = false;

  constructor(
    private searchUniversityService: SearchUniversityService,
    private searchUniversityQuery: SearchUniversityQuery
  ) {}

  ngOnInit(): void {
    this.universities$ = this.searchUniversityQuery.select();

    this.universityForm.valueChanges
      .pipe(
        debounceTime(350),
        startWith({
          university: '',
        }),
        switchMap(({ university }) =>
          this.searchUniversityService.get(university ?? '', 4)
        )
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.searchUniversityService.reset();
  }

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
