import { Injectable } from "@angular/core";
import { Course, emptyCourse } from "@app/models/course.model";
import { Store, StoreConfig } from "@datorama/akita";


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'course', resettable: true })
export class CourseStore extends Store<Course> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<Course> {
  return emptyCourse;
}
