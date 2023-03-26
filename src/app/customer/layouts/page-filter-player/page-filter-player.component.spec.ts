import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFilterPlayerComponent } from './page-filter-player.component';

describe('PageFilterPlayerComponent', () => {
  let component: PageFilterPlayerComponent;
  let fixture: ComponentFixture<PageFilterPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFilterPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFilterPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
