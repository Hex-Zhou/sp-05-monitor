import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSiteListTableComponent } from './dynamic-site-list-table.component';

describe('DynamicSiteListTableComponent', () => {
  let component: DynamicSiteListTableComponent;
  let fixture: ComponentFixture<DynamicSiteListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicSiteListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSiteListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
