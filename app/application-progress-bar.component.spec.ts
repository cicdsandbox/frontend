import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule }              from '@angular/router/testing';

import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { Router }          from '@angular/router';

import { ApplicationData } from './application-data';
import { ApplicationDataService } from './application-data.service';

import { MockApplicationDataService } from './mock-application-data.service';

import { ApplicationProgressBarComponent } from './application-progress-bar.component';

describe('ApplicationProgressBarComponent', () => {

  let comp: ApplicationProgressBarComponent;
  let fixture: ComponentFixture<ApplicationProgressBarComponent>;
  let dataService: ApplicationDataService;
  let spy: jasmine.Spy;
  let de: DebugElement;
  let des: DebugElement[];
  let el: HTMLElement;

  beforeEach(async(() => {
    // Configure the test bed to test this component.
    TestBed.configureTestingModule({
      declarations: [ApplicationProgressBarComponent],
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate(url: string[]) { };
            url = '/phone_numbers';
          }
        },
        { provide: ApplicationDataService, useClass: MockApplicationDataService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // Create the testing fixture.
    fixture = TestBed.createComponent(ApplicationProgressBarComponent);

    // Then get a reference to the component to test from the fixture.
    comp = fixture.componentInstance;
  });

  it('should have 11 nav items', () => {
    fixture.detectChanges();

    des = fixture.debugElement.queryAll(By.css('.progress-bar-item'));

    expect(des.length).toBe(11, 'There should be 11 nav items');
  });

  it('should have the phone number nav item active', fakeAsync(() => {
    // Force the UI to update, wait for all async calls to complete, then force
    // the UI to update again.
    fixture.detectChanges();
    tick();

    // Since the fake router's url is '/phone_numbers', verify that the
    // phone number nav item is active.
    de = fixture.debugElement.query(By.css('.active'));
    expect(de).not.toBeNull(
      'There is no active nav item, but there should be');
    expect(de.nativeElement.innerText).toMatch(
      /Phone Numbers/, 'The phone numbers nav item should be active.');
  }));

  it('should navigate to /characteristics after clicking the first nav item',
    fakeAsync(() => {
      // Force the UI to update and wait for all async calls to complete.
      fixture.detectChanges();
      tick();

      // Get a reference to the router so we can monitor it.
      const router = fixture.debugElement.injector.get(Router);
      const spy = spyOn(router, 'navigate');

      // Find the first nav item.
      de = fixture.debugElement.query(By.css('.progress-bar-item'));
      el = de.nativeElement;

      // Click it.
      el.click();

      // Wait for all async calls to finish.
      tick();

      // Verify that the router was routed to the right location.
      const navArgs = spy.calls.first().args[0][0];
      expect(navArgs).toBe(
        '/characteristics', 'Clicking should navigate to /characteristics');
    })
  );
});
