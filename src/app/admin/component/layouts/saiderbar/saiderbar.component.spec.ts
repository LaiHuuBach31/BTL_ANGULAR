import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiderbarComponent } from './saiderbar.component';

describe('SaiderbarComponent', () => {
  let component: SaiderbarComponent;
  let fixture: ComponentFixture<SaiderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaiderbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
