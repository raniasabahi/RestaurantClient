import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resto} from './restaurant';

describe('Resto', () => {
  let component: Resto;
  let fixture: ComponentFixture<Resto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Resto ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
