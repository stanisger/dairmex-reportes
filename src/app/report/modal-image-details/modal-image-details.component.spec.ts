import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImageDetailsComponent } from './modal-image-details.component';

describe('ModalImageDetailsComponent', () => {
  let component: ModalImageDetailsComponent;
  let fixture: ComponentFixture<ModalImageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalImageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalImageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
