import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReserverPage } from './reserver.page';

describe('ReserverPage', () => {
  let component: ReserverPage;
  let fixture: ComponentFixture<ReserverPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
