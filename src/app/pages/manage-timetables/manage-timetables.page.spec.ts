import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTimetablesPage } from './manage-timetables.page';

describe('ManageTimetablesPage', () => {
  let component: ManageTimetablesPage;
  let fixture: ComponentFixture<ManageTimetablesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTimetablesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTimetablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
