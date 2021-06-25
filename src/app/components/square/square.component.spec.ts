import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Squarecomponent } from './slot.component';

describe('SlotComponent', () => {
  let component: Squarecomponent;
  let fixture: ComponentFixture<Squarecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Squarecomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Squarecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
