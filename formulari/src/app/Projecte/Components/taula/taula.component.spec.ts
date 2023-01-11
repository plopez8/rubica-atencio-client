import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaulaComponent } from './taula.component';

describe('TaulaComponent', () => {
  let component: TaulaComponent;
  let fixture: ComponentFixture<TaulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
