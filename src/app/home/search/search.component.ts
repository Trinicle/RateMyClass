import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, startWith, switchMap } from 'rxjs';
import { UniversitySearchService } from 'src/app/shared/university-search/university-search.service';
import { University } from 'src/app/shared/university-search/university.model';

@Component({
  selector: 'home-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  universityForm = new FormGroup({
    university: new FormControl(''),
  });
  universities: University[] = [];
  isInputFocused: boolean = false;

  constructor(private universtySearchService: UniversitySearchService) { }

  ngOnInit(): void {
    this.universtySearchService.get().subscribe();

    this.universityForm.valueChanges
      .pipe(
        debounceTime(350),
        startWith({
          university: '',
        }),
        switchMap(({ university }) =>
          this.universtySearchService.get(university ?? ''),
        ),
      )
      .subscribe((results: University[]) => {
        this.universities = results;
        console.log(this.universities);
      });
  }

  ngOnDestroy(): void {
  }

  toggleInputFocused() {
    this.isInputFocused = !this.isInputFocused;
  }
}
