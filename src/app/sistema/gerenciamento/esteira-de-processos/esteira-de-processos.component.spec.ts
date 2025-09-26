import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsteiraDeProcessosComponent } from './esteira-de-processos.component';

describe('EsteiraDeProcessosComponent', () => {
  let component: EsteiraDeProcessosComponent;
  let fixture: ComponentFixture<EsteiraDeProcessosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsteiraDeProcessosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsteiraDeProcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
