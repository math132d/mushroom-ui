import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMushroomComponent } from './add-mushroom.component';

describe('AddMushroomComponent', () => {
  let component: AddMushroomComponent;
  let fixture: ComponentFixture<AddMushroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMushroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMushroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
