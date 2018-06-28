import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShortlinkComponent } from './edit-shortlink.component';

describe('EditShortlinkComponent', () => {
  let component: EditShortlinkComponent;
  let fixture: ComponentFixture<EditShortlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShortlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShortlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
