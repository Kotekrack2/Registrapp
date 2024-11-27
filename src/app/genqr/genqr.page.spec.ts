import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenqrPage } from './genqr.page';

describe('GenqrPage', () => {
  let component: GenqrPage;
  let fixture: ComponentFixture<GenqrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GenqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
