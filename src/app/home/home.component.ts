import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeSearchBox } from './home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  inputText: HomeSearchBox = { text: '' }

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void { }

  searchSchool() {
    this.homeService.searchSchool(this.inputText.text)
  }
}
