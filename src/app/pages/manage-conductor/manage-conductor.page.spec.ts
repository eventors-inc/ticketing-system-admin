import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageConductorPage } from './manage-conductor.page';

describe('ManageConductorPage', () => {
  let component: ManageConductorPage;
  let fixture: ComponentFixture<ManageConductorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageConductorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
