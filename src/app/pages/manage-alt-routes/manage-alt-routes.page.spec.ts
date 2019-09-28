import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAltRoutesPage } from './manage-alt-routes.page';

describe('ManageAltRoutesPage', () => {
  let component: ManageAltRoutesPage;
  let fixture: ComponentFixture<ManageAltRoutesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAltRoutesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAltRoutesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
