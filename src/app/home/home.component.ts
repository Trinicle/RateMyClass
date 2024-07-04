import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchUniversityComponent } from './search/search-university.component';
import { HomeNavbarComponent } from '../navbar/home-navbar/home-navbar.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [HomeNavbarComponent, SearchUniversityComponent],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
