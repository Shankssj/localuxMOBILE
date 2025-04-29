import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
  standalone: false
})
export class ConnexionPage implements OnInit {
login:any;
pwd:any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  onLogin() {
    if (!this.login || !this.pwd) {
      console.log('Veuillez remplir tous les champs.');
      return;
    }
  
    const data = {
      login: this.login,
      password: this.pwd
    };
  
    this.http.post('http://localhost:3000/login', data).subscribe(
      (response: any) => {
        console.log('Connexion réussie', response);
  
        // Envoie client_id, nom, prenom à la page suivante
        this.router.navigate(['/saisie-ville-destination'], {
          queryParams: {
            idclient: response.client.idclient,
            nom: response.client.nom,
            prenom: response.client.prenom
          },
          replaceUrl: true
        });
        console.log(response.client.id);
      },
      (error) => {
        console.error('Erreur de connexion', error);
        console.log('Login ou mot de passe incorrect.');
      }
    );
  }
}
