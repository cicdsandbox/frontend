import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApplicationDataService } from './application-data.service';

@Component({
  moduleId: module.id,
  selector: 'application-progress-bar',
  templateUrl: 'application-progress-bar.component.html',
  styleUrls: ['application-progress-bar.component.css']
})
export class ApplicationProgressBarComponent {

  constructor(
    private router: Router,
    private applicationDataService: ApplicationDataService) { }

  pathIs(path: string): boolean {
    return path == this.router.url;
  }

  saveAndNavigate(path: string): void {
    this.applicationDataService.updateApplicationData()
      .then(response => {
        if (response.success) {
          this.router.navigate([path]);
        } else {
          console.log('Failed to update data to server. Not navigating away.');
        }
      });
  }
}
