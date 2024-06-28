import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from './home.service';

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
