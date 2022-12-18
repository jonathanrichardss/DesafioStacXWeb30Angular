import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLangComponent } from './button-lang.component';

describe('ButtonLangComponent', () => {
  let component: ButtonLangComponent;
  let fixture: ComponentFixture<ButtonLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonLangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
