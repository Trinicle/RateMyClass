import { Injectable } from "@angular/core";
import { CourseList } from "@app/models/course.model";
import { CourseListStore } from "@app/stores/course-list.store";
import { Query,} from "@datorama/akita";


@Injectable({ providedIn: 'root' })
export class CourseListQuery extends Query<CourseList> {
  constructor(protected override store: CourseListStore) {
    super(store)
  }
}
