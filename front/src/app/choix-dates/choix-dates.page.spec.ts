import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoixDatesPage } from './choix-dates.page';

describe('ChoixDatesPage', () => {
  let component: ChoixDatesPage;
  let fixture: ComponentFixture<ChoixDatesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixDatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
