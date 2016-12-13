import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalCharacteristicsComponent } from './personal-characteristics.component';
import { PhoneNumbersComponent }            from './phone-numbers.component';

const routes: Routes = [
  { path: '', redirectTo: '/characteristics', pathMatch: 'full' },
  { path: 'characteristics', component: PersonalCharacteristicsComponent },
  { path: 'phone_numbers',   component: PhoneNumbersComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
