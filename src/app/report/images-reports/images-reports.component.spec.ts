import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesReportsComponent } from './images-reports.component';

describe('ImagesReportsComponent', () => {
  let component: ImagesReportsComponent;
  let fixture: ComponentFixture<ImagesReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
