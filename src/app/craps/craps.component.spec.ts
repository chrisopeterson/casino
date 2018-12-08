import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrapsComponent } from './craps.component';

describe('CrapsComponent', () => {
  let component: CrapsComponent;
  let fixture: ComponentFixture<CrapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
