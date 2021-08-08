import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdosComponent } from './tdos.component';

describe('TdosComponent', () => {
  let component: TdosComponent;
  let fixture: ComponentFixture<TdosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
