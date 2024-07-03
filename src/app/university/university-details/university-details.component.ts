import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';
import { University, emptyUniversity } from '@app/models/university.model';
import { Observable, of } from 'rxjs';
import { UniversityQuery } from '@app/query/university.query';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'university-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './university-details.component.html',
  styleUrl: './university-details.component.scss',
})
export class UniversityDetailsComponent implements OnInit {
  university$: Observable<University> = of(emptyUniversity);

  constructor(
    private universityQuery: UniversityQuery,
    private universityService: UniversityService
  ) {}

  ngOnInit(): void {
    this.university$ = this.universityQuery.selectUniversity();
  }
}
