import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soccer2018Component } from './soccer2018.component';

describe('Soccer2018Component', () => {
  let component: Soccer2018Component;
  let fixture: ComponentFixture<Soccer2018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Soccer2018Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Soccer2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
