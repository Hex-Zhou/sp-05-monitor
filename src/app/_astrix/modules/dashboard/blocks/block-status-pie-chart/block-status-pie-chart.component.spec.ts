import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockStatusPieChartComponent } from './block-status-pie-chart.component';

describe('BlockStatusPieChartComponent', () => {
  let component: BlockStatusPieChartComponent;
  let fixture: ComponentFixture<BlockStatusPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockStatusPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockStatusPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
