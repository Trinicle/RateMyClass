import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'general-navbar',
  templateUrl: './general-navbar.component.html',
  styleUrls: ['./general-navbar.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class GeneralNavbarComponent {
  classNameControl = new FormControl('');
}
