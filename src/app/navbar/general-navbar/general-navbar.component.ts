import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-general-navbar',
  templateUrl: './general-navbar.component.html',
  styleUrls: ['./general-navbar.component.scss']
})
export class GeneralNavbarComponent {
  classNameControl = new FormControl('');
  

}
