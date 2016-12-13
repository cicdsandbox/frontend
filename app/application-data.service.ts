import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ApplicationData, PhoneNumber } from './application-data';

@Injectable()
export class ApplicationDataService {
  // The local state of application data. This is a single, global instance that
  // is shared across the whole app. Once it is pulled from the server, only the
  // local state will be pulled by getApplicationData(). updateApplicationData()
  // will always send the current local state back to the server.
  application_data: ApplicationData;

  // URL to the web api.
  private applicationDataUrl = 'http://localhost:8080/application-data';

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getApplicationData(): Promise<ApplicationData> {
    // Pull the application data from the server only if we don't already have
    // it. Otherwise, return the local cached copy. This copy is global, so it
    // will be auto updated as the forms manipulate it.
    if (this.application_data) {
      return Promise.resolve(this.application_data);
    } else {
      const id = 11;
      const url = `${this.applicationDataUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => {
          this.application_data = response.json() as ApplicationData;
          return this.application_data;
        })
        .catch(this.handleError);
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  updateApplicationData(): Promise<any> {
    // Any time we want to update the data, send the current local copy to the
    // server.
    if (this.application_data) {
      const url = `${this.applicationDataUrl}/${this.application_data.id}`;
      return this.http.put(
        url,
        JSON.stringify(this.application_data),
        { headers: this.headers })
        .toPromise()
        .then(response => {
          return { success: true };
        })
        .catch(this.handleError);
    } else {
      return Promise.resolve({ success: false });
    }
  }
}
