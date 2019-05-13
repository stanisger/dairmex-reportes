import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddEquipmentComponent } from './modal-add-equipment.component';

describe('ModalAddEquipmentComponent', () => {
  let component: ModalAddEquipmentComponent;
  let fixture: ComponentFixture<ModalAddEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
