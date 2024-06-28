import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { SearchComponent } from './search/search.component';
import { HomeNavbarComponent } from '../navbar/home-navbar/home-navbar.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [HomeNavbarComponent, SearchComponent],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
