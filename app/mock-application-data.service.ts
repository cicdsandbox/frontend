import { Injectable } from '@angular/core';

import { ApplicationData } from './application-data';

@Injectable()
export class MockApplicationDataService {
  // The local state of application data. This is a single, global instance that
  // is shared across the whole app. Once it is pulled from the server, only the
  // local state will be pulled by getApplicationData(). updateApplicationData()
  // will always send the current local state back to the server.
  application_data = new ApplicationData();

  getApplicationData(): Promise<ApplicationData> {
    return Promise.resolve(this.application_data);
  }

  updateApplicationData(): Promise<any> {
    return Promise.resolve({ success: true });
  }
}
