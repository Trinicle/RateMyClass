import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { UniversitySearchService } from '../shared/university-search/university-search.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, startWith, switchMap } from 'rxjs';
import { University } from '../shared/university-search/university.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


  constructor(
    private homeService: HomeService,
  ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void { }

}
