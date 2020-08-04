import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTanoPage } from './detail-tano.page';

describe('DetailTanoPage', () => {
  let component: DetailTanoPage;
  let fixture: ComponentFixture<DetailTanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTanoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
