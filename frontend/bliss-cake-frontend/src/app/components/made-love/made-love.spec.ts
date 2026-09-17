import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadeLove } from './made-love';

describe('MadeLove', () => {
  let component: MadeLove;
  let fixture: ComponentFixture<MadeLove>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadeLove],
    }).compileComponents();

    fixture = TestBed.createComponent(MadeLove);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
