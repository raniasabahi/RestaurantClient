import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoDetailsComponent } from './resto-details.component';

describe('RestoDetailsComponent', () => {
  let component: RestoDetailsComponent;
  let fixture: ComponentFixture<RestoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
