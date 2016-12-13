import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApplicationData } from './application-data';
import { ApplicationDataService } from './application-data.service';

@Component({
  moduleId: module.id,
  selector: 'phone-numbers',
  templateUrl: 'phone-numbers.component.html',
  styleUrls: ['phone-numbers.component.css']
})
export class PhoneNumbersComponent implements OnInit {
  application_data: ApplicationData;

  constructor(
    private router: Router,
    private applicationDataService: ApplicationDataService
  ) { }

  ngOnInit(): void {
    this.applicationDataService.getApplicationData().then(
      application_data => this.application_data = application_data);
  }

  saveAndBack(): void {
    this.applicationDataService.updateApplicationData()
      .then(response => {
        if (response.success) {
          this.router.navigate(['/characteristics']);
        } else {
          console.log('Failed to update data to server. Not navigating away.');
        }
      });
  }
}
