import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIteratorComponent } from './list-iterator.component';

describe('ListIteratorComponent', () => {
  let component: ListIteratorComponent;
  let fixture: ComponentFixture<ListIteratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIteratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListIteratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
