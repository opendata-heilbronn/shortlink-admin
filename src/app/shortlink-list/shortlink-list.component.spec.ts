import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlinkListComponent } from './shortlink-list.component';

describe('ShortlinkListComponent', () => {
  let component: ShortlinkListComponent;
  let fixture: ComponentFixture<ShortlinkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortlinkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
