import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Basketball2020Component } from './basketball2020.component';

describe('Basketball2020Component', () => {
  let component: Basketball2020Component;
  let fixture: ComponentFixture<Basketball2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Basketball2020Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Basketball2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
