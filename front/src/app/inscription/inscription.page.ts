import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
  standalone: false
})
export class InscriptionPage {
  
    nom: string='';
    prenom: string='';
    tel: string='';
    rue: string='';
    ville: string='';
    cp: string='';
    login: string='';
    mdp: string='';
  

  constructor(
    private http: HttpClient,
    private router: Router
    
  ) {}

  inscription() {
    const newUser = {
      nom:this.nom,
      prenom: this.prenom,
      tel: this.tel,
      rue: this.rue,
      ville: this.ville,
      cp: this.cp,
      login: this.login,
      mdp: this.mdp,
    };

    console.log('Nouvel utilisateur à enregistrer :', newUser);

    this.http.post('http://localhost:3000/inscription', newUser).subscribe({
      next: (response) => {
        console.log('Inscription réussie :', response);
        this.router.navigate(['/destination']);
      },
      error: (error) => {
        console.error('Erreur lors de l\'inscription :', error);
      }
    });
  }

  onGoToLogin() {
    this.router.navigate(['/connexion']);
  
  }

}

