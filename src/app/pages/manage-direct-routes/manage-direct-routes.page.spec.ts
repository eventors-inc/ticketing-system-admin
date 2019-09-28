import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDirectRoutesPage } from './manage-direct-routes.page';

describe('ManageDirectRoutesPage', () => {
  let component: ManageDirectRoutesPage;
  let fixture: ComponentFixture<ManageDirectRoutesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDirectRoutesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDirectRoutesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
