import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSiteListComponent } from './page-site-list.component';

describe('PageSiteListComponent', () => {
  let component: PageSiteListComponent;
  let fixture: ComponentFixture<PageSiteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSiteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
