import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePassengersPage } from './manage-passengers.page';

describe('ManagePassengersPage', () => {
  let component: ManagePassengersPage;
  let fixture: ComponentFixture<ManagePassengersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePassengersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePassengersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
