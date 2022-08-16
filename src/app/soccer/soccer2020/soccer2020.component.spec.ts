import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soccer2020Component } from './soccer2020.component';

describe('Soccer2020Component', () => {
  let component: Soccer2020Component;
  let fixture: ComponentFixture<Soccer2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soccer2020Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Soccer2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
