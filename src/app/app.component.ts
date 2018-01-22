import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Promo';
  description = 'Bonjour, il pleut toujours ';
  couleur = 'red';
  texte = '';
  user = {
    name: 'Patrick',
    age: '42',
    birthday: new Date('1976/01/02')
  };


  getDescription(): string {
    return this.description.toUpperCase();
  }


  changeTitle($event) {
    if (this.title === 'Promo') {
    this.title = 'Promo La Poste 3';
    } else {
    this.title = 'Promo';
    }

  }

  changeCouleur($event) {
    if (this.couleur === 'red') {
    this.couleur = 'blue';
    } else {
    this.couleur = 'red';
    }

  }
  affiche($event) {
this.texte = $event.target.value;

console.log(this.texte);
  }
 }
