import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimeTableModalPage } from './edit-time-table-modal.page';

describe('EditTimeTableModalPage', () => {
  let component: EditTimeTableModalPage;
  let fixture: ComponentFixture<EditTimeTableModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTimeTableModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTimeTableModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
