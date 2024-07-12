import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable, debounceTime, of, startWith, switchMap } from 'rxjs';
import { SearchCourseItemState } from './state/general-navbar.store';
import { GeneralNavbarService } from './state/general-navbar.service';
import { GeneralNavbarQuery } from './state/general-navbar.query';
import { CommonModule } from '@angular/common';
import { SearchCourseItem } from './state/general-navbar.model';
import { CourseRatingService } from '@app/course-rating/state/course-rating.service';
import { CoursesService } from '@app/course-rating/course-details/state/courses.service';

@Component({
  selector: 'general-navbar',
  templateUrl: './general-navbar.component.html',
  styleUrls: ['./general-navbar.component.scss'],
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
})
export class GeneralNavbarComponent implements OnInit, OnDestroy {
  @ViewChild('containerElement', { static: false })
  containerElement!: ElementRef;

  courseForm = new FormGroup({
    course: new FormControl(''),
  });
  courses$: Observable<SearchCourseItemState> = of();
  isInputFocused: boolean = false;
  universityId: number = 0;

  constructor(
    private courseRatingService: CourseRatingService,
    private courseService: CoursesService,
    private generalNavbarService: GeneralNavbarService,
    private generalNavbarQuery: GeneralNavbarQuery,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.universityId = +(
      this.route.snapshot.paramMap.get('universityId') ?? 0
    );
    this.courses$ = this.generalNavbarQuery.select();

    this.courseForm.valueChanges
      .pipe(
        debounceTime(350),
        startWith({
          course: '',
        }),
        switchMap(({ course }) =>
          this.generalNavbarService.get(this.universityId, course ?? '', 4)
        )
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.generalNavbarService.reset();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.containerElement.nativeElement.contains(event.target)) {
      this.isInputFocused = false;
    } else {
      this.isInputFocused = true;
    }
  }

  toggleInputFocused() {
    this.isInputFocused = !this.isInputFocused;
  }

  onSearchCourse(course: SearchCourseItem) {
    this.courseRatingService.reset();
    this.courseService.reset();

    this.courseService.get(this.universityId, course.id);
    this.courseRatingService.getRatings(this.universityId, course.id);

    this.router.navigate([
      '/university',
      this.universityId,
      'course',
      course.id,
      'ratings',
    ]);
  }
}
