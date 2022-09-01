import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLogin2Component } from './page-login2.component';

describe('PageLogin2Component', () => {
  let component: PageLogin2Component;
  let fixture: ComponentFixture<PageLogin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLogin2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLogin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
