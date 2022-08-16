import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soccer2019Component } from './soccer2019.component';

describe('Soccer2018Component', () => {
  let component: Soccer2019Component;
  let fixture: ComponentFixture<Soccer2019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soccer2019Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Soccer2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
