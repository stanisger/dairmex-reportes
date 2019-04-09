import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainorComponent } from './mainor.component';

describe('MainorComponent', () => {
  let component: MainorComponent;
  let fixture: ComponentFixture<MainorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
