import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { UniversitySearchService } from '../shared/university-search/university-search.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  universityForm = new FormGroup({
    university: new FormControl(''),
  });

  constructor(
    private homeService: HomeService,
    private universtySearchService: UniversitySearchService,
  ) { }

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
      .subscribe();
  }

  ngOnDestroy(): void { }

}
