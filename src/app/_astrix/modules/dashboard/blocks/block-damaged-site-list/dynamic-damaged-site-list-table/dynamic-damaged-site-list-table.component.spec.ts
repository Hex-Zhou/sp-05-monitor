import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDamagedSiteListTableComponent } from './dynamic-damaged-site-list-table.component';

describe('DynamicDamagedSiteListTableComponent', () => {
  let component: DynamicDamagedSiteListTableComponent;
  let fixture: ComponentFixture<DynamicDamagedSiteListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDamagedSiteListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDamagedSiteListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
