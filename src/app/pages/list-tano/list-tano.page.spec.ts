import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTanoPage } from './list-tano.page';

describe('ListTanoPage', () => {
  let component: ListTanoPage;
  let fixture: ComponentFixture<ListTanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTanoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
