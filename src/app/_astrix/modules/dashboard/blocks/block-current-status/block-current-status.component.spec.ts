import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCurrentStatusComponent } from './block-current-status.component';

describe('BlockCurrentStatusComponent', () => {
  let component: BlockCurrentStatusComponent;
  let fixture: ComponentFixture<BlockCurrentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockCurrentStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCurrentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
