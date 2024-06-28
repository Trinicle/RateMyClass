import { Injectable } from "@angular/core";
import { University, emptyUniversity } from "@app/models/university.model";
import { Store, StoreConfig } from "@datorama/akita";

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'university', resettable: true })
export class UniversityStore extends Store<University> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<University> {
  return emptyUniversity;
}
