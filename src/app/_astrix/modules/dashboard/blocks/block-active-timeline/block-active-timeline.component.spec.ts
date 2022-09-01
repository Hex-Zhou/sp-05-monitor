import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockActiveTimelineComponent } from './block-active-timeline.component';

describe('BlockActiveTimelineComponent', () => {
  let component: BlockActiveTimelineComponent;
  let fixture: ComponentFixture<BlockActiveTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockActiveTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockActiveTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
