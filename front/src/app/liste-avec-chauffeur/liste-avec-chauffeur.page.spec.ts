import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeAvecChauffeurPage } from './liste-avec-chauffeur.page';

describe('ListeAvecChauffeurPage', () => {
  let component: ListeAvecChauffeurPage;
  let fixture: ComponentFixture<ListeAvecChauffeurPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAvecChauffeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
