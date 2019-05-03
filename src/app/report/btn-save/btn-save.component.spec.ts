import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSaveComponent } from './btn-save.component';

describe('BtnSaveComponent', () => {
  let component: BtnSaveComponent;
  let fixture: ComponentFixture<BtnSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
