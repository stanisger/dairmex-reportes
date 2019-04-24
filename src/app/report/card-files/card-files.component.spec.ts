import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilesComponent } from './card-files.component';

describe('CardFilesComponent', () => {
  let component: CardFilesComponent;
  let fixture: ComponentFixture<CardFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
