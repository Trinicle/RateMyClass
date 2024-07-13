import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { addCoursePostRequest } from './state/add-course.model';
import { AddCourseService } from './state/add-course.service';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss',
})
export class AddCourseComponent implements OnInit, OnDestroy {
  validForm = true;
  courseForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(10),
    ]),
  });

  constructor(
    private dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) private data: any,
    private addCourseService: AddCourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  toggleSubmit() {
    if (this.courseForm.valid) {
      const template = this.courseForm.value as addCoursePostRequest;

      this.addCourseService.post(this.data.universityId, template);
      this.dialogRef.close();
    }
    this.validForm = false;
  }
}
