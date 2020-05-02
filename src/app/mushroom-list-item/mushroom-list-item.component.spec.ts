import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MushroomListItemComponent } from './mushroom-list-item.component';

describe('MushroomListItemComponent', () => {
  let component: MushroomListItemComponent;
  let fixture: ComponentFixture<MushroomListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MushroomListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MushroomListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
