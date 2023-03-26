import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFilterProComponent } from './page-filter-pro.component';

describe('PageFilterProComponent', () => {
  let component: PageFilterProComponent;
  let fixture: ComponentFixture<PageFilterProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFilterProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFilterProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
