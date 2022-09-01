import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLogin1Component } from './page-login1.component';

describe('PageLogin1Component', () => {
  let component: PageLogin1Component;
  let fixture: ComponentFixture<PageLogin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLogin1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLogin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
