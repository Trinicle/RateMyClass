import { Injectable } from '@angular/core';
import {
  persistState,
  PersistStateParams,
  Store,
  StoreConfig,
} from '@datorama/akita';
import {
  UniversityDetails,
  emptyUniversityDetails,
} from './university-details.model';
import { OperatorFunction } from 'rxjs';

const persist: PersistStateParams = {
  key: 'university-details',
  storage: localStorage,
  include: ['unviesity-details'],
  enableInNonBrowser: false,
  deserialize: JSON.parse,
  serialize: JSON.stringify,
  select: [],

  preStorageUpdate: function (storeName: string, state: any) {
    throw new Error('Function not implemented.');
  },
  preStoreUpdate: function (storeName: string, state: any, initialState: any) {
    throw new Error('Function not implemented.');
  },
  skipStorageUpdate: function (): boolean {
    throw new Error('Function not implemented.');
  },
  preStorageUpdateOperator: function (): OperatorFunction<any, any> {
    throw new Error('Function not implemented.');
  },
  persistOnDestroy: false,
};

persistState(persist);

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'university-details', resettable: true })
export class UniversityDetailsStore extends Store<UniversityDetails> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<UniversityDetails> {
  return emptyUniversityDetails;
}
