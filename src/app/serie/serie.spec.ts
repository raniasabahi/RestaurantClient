import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serie} from './serie';

describe('Serie', () => {
  let component: Serie;
  let fixture: ComponentFixture<Serie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Serie ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
