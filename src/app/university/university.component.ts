import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UniversityService } from './university.service';
import { University, emptyUniversity } from '@app/models/university.model';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss'],
})
export class UniversityComponent implements OnInit, OnDestroy {
  id: number = 0;
  university: University = emptyUniversity

  constructor(
    private route: ActivatedRoute,
    private universityService: UniversityService
  ) {}

  ngOnInit(): void {
    this.universityService.reset();
    this.id = +(this.route.snapshot.paramMap.get('id') ?? 0);

    this.universityService.updateUniversity(this.id);
    this.universityService.getUniversity().subscribe(data => {
      this.university = data;
    })
  }

  ngOnDestroy(): void {}
}
