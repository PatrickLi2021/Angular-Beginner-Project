import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Basketball2018Component } from './basketball2018.component';

describe('Basketball2018Component', () => {
  let component: Basketball2018Component;
  let fixture: ComponentFixture<Basketball2018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Basketball2018Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Basketball2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
