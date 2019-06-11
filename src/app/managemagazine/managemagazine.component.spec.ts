import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagemagazineComponent } from './managemagazine.component';

describe('ManagemagazineComponent', () => {
  let component: ManagemagazineComponent;
  let fixture: ComponentFixture<ManagemagazineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagemagazineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagemagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
