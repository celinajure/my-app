import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrateModalComponent } from './registrate-modal.component';

describe('RegistrateModalComponent', () => {
  let component: RegistrateModalComponent;
  let fixture: ComponentFixture<RegistrateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrateModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
