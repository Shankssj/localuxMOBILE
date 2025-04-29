import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-choix-dates',
  templateUrl: './choix-dates.page.html',
  styleUrls: ['./choix-dates.page.scss'],
  standalone: false

})
export class ChoixDatesPage implements OnInit {
  dateDebut: string = '';
  dateFin: string = '';
  vehicule: any = null;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state && nav.extras.state['vehicule']) {
      this.vehicule = nav.extras.state['vehicule'];
    } else {
      console.error("Aucun véhicule trouvé dans la navigation");
    }
  }

  validerDates() {
    if (!this.dateDebut || !this.dateFin) {
      alert("Veuillez remplir les deux dates.");
      return;
    }
  
    const body = {
      le_vehicule_id: this.vehicule.id,
      le_client_id: 1, // <-- À remplacer par l'ID du client connecté
      datedebut: this.dateDebut,
      datefin: this.dateFin,
      la_formule_avec_chauffeur_id: 1, // <-- À ajuster selon ton contexte
      la_formule_sans_chauffeur_id: null,
      type: 'avec_chauffeur'
    };
  
    this.http.post('http://localhost:3000/ajouter-location', body).subscribe(
      (res: any) => {
        console.log("Location enregistrée :", res);
        alert("Réservation réussie !");
        // this.router.navigate(['/confirmation']);
      },
      (err) => {
        console.error("Erreur API :", err);
        alert("Erreur lors de la réservation.");
      }
    );
  }
  
}
