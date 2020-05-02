import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenusComponent } from './genus.component';

describe('GenusComponent', () => {
  let component: GenusComponent;
  let fixture: ComponentFixture<GenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
