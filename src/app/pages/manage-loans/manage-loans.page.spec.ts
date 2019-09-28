import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLoansPage } from './manage-loans.page';

describe('ManageLoansPage', () => {
  let component: ManageLoansPage;
  let fixture: ComponentFixture<ManageLoansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLoansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLoansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
