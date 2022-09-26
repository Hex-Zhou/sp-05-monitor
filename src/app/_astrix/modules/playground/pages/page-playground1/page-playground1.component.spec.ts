import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlayground1Component } from './page-playground1.component';

describe('PagePlayground1Component', () => {
  let component: PagePlayground1Component;
  let fixture: ComponentFixture<PagePlayground1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePlayground1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePlayground1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
