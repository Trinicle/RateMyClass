import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UniversityDetailsService } from './state/university-details.service';
import { UniversityDetails } from './state/university-details.model';
import { UniversityDetailsQuery } from './state/university-details.query';

@Component({
  selector: 'university-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './university-details.component.html',
  styleUrl: './university-details.component.scss',
})
export class UniversityDetailsComponent implements OnInit, OnDestroy {
  university$: Observable<UniversityDetails> = of();

  constructor(
    private universityDetailsService: UniversityDetailsService,
    private universityDetailsQuery: UniversityDetailsQuery,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.universityDetailsService.get(id);

    this.university$ = this.universityDetailsQuery.select();
  }

  ngOnDestroy(): void {}
}
