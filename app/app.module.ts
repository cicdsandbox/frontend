import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }                     from './app.component';
import { ApplicationDataService }           from './application-data.service';
import { ApplicationProgressBarComponent }  from './application-progress-bar.component';
import { PersonalCharacteristicsComponent } from './personal-characteristics.component';
import { PhoneNumbersComponent }            from './phone-numbers.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    Angular2FontawesomeModule
  ],
  declarations: [
    AppComponent,
    ApplicationProgressBarComponent,
    PersonalCharacteristicsComponent,
    PhoneNumbersComponent
  ],
  providers: [
    ApplicationDataService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
