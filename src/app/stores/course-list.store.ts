import { Injectable } from "@angular/core";
import { CourseList, emptyCourseList } from "@app/models/course.model";
import { Store, StoreConfig } from "@datorama/akita";


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'course', resettable: true })
export class CourseListStore extends Store<CourseList> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<CourseList> {
  return emptyCourseList;
}
