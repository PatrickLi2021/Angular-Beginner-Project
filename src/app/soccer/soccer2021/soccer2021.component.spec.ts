import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soccer2021Component } from './soccer2021.component';

describe('Soccer2021Component', () => {
  let component: Soccer2021Component;
  let fixture: ComponentFixture<Soccer2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soccer2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Soccer2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
