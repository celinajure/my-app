import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelModalComponent } from './panel-modal.component';

describe('PanelModalComponent', () => {
  let component: PanelModalComponent;
  let fixture: ComponentFixture<PanelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
