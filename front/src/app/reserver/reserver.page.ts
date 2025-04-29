import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.page.html',
  styleUrls: ['./reserver.page.scss'],
  standalone: false
})
export class ReserverPage implements OnInit {
  user: any = { nom: '', prenom: '', email: '', montant:'' }; // Modèle pour capturer les données du formulaire
  atelier: any;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }

  onSubmit() {
    // Enregistrement des données utilisateur
    this.http.post('http://localhost:3000/utilisateur', this.user).subscribe((result: any) => {
      console.log('Utilisateur créé:', result);
  
      //if (this.atelier && this.atelier.id) {
        const participation = {
          id_utilisateur: result.id,
          id_event: this.atelier.id,
          montantUtil: this.user.montant
        };

        console.log(participation)
  
        // Enregistrement de la participation à l'événement
        this.http.post('http://localhost:3000/participer', participation).subscribe((res: any) => {
          console.log('Participation enregistrée avec succès:', res);
          }, (err) => {
          console.error('Erreur lors de l\'enregistrement de la participation :', err);
          alert('Une erreur est survenue lors de l\'enregistrement de votre participation.');
        });

      //}
    }, (err) => {
      console.error('Erreur lors de la création de l\'utilisateur :', err);
      alert('Une erreur est survenue lors de la création de l\'utilisateur.');
    });
  }

  ngOnInit() {
  }

}
