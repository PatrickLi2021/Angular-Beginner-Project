import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Basketball2019Component } from './basketball2019.component';

describe('Basketball2019Component', () => {
  let component: Basketball2019Component;
  let fixture: ComponentFixture<Basketball2019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Basketball2019Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Basketball2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
