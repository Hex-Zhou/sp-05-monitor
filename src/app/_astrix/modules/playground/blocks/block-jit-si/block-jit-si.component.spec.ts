import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockJitSiComponent } from './block-jit-si.component';

describe('BlockJitSiComponent', () => {
  let component: BlockJitSiComponent;
  let fixture: ComponentFixture<BlockJitSiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockJitSiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockJitSiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
