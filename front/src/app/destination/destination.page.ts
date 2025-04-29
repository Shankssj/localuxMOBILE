import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
  standalone: false
})
export class DestinationPage implements OnInit {
  destination: string = '';
  formulesAvecChauffeur: any[] = [];

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit() {
    this.getFormulesAvecChauffeur();
  }

  getFormulesAvecChauffeur() {
    this.http.get<any[]>('http://localhost:3000/destination').subscribe(
      data => {
        this.formulesAvecChauffeur = data;
        console.log('Formules chargées :', data);
      },
      error => {
        console.error('Erreur lors de la récupération des formules', error);
      }
    );
  }

  onFormuleSelectionnee(destination: string) {
    this.destination = destination;
  }
  
  allerAuxVehicules() {
    this.router.navigate(['/liste-avec-chauffeur'], {
      queryParams: { destination: this.destination },
    });
  }
  

  
}
