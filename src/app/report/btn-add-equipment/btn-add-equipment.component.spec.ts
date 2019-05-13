import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddEquipmentComponent } from './btn-add-equipment.component';

describe('BtnAddEquipmentComponent', () => {
  let component: BtnAddEquipmentComponent;
  let fixture: ComponentFixture<BtnAddEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnAddEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAddEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
