import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-avec-chauffeur',
  templateUrl: './liste-avec-chauffeur.page.html',
  styleUrls: ['./liste-avec-chauffeur.page.scss'],
  standalone: false
})
export class ListeAvecChauffeurPage implements OnInit {
  vehicules: any[] = [];
  vehiculeSelectionne: any = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.chargerVehicules();
  }

  chargerVehicules() {
    const url = 'http://localhost:3000/liste-avec-chauffeur';
    this.http.get<any[]>(url).subscribe(
      (result) => {
        this.vehicules = result;
        console.log('Véhicules chargés :', result);
      },
      (error) => {
        console.error('Erreur de chargement des véhicules :', error);
      }
    );
  }

  selectionnerVehicule(vehicule: any) {
    this.vehiculeSelectionne = vehicule;
  }

  validerSelection() {
    if (!this.vehiculeSelectionne) {
      alert("Veuillez sélectionner un véhicule.");
      return;
    }

    console.log("Véhicule sélectionné :", this.vehiculeSelectionne);
    this.router.navigate(['/choix-dates'], {
      state: { vehicule: this.vehiculeSelectionne }
    });
    
    
    // Ici, on pourrait router vers une autre page ou sauvegarder la sélection
    // this.router.navigate(['/resume'], { state: { vehicule: this.vehiculeSelectionne } });
  }
}
