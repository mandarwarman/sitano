import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPengoPage } from './list-pengo.page';

describe('ListPengoPage', () => {
  let component: ListPengoPage;
  let fixture: ComponentFixture<ListPengoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPengoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPengoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
