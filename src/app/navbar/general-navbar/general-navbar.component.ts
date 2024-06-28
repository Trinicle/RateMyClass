import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'general-navbar',
    templateUrl: './general-navbar.component.html',
    styleUrls: ['./general-navbar.component.scss'],
    standalone: true
})
export class GeneralNavbarComponent {
  classNameControl = new FormControl('');


}
