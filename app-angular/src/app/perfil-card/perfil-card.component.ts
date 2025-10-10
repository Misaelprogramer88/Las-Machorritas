import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-card',
  templateUrl: './perfil-card.component.html',
  styleUrls: ['./perfil-card.component.scss']
})
export class PerfilCardComponent implements OnInit {

  // La variable que conecta el TS con el HTML
  isActive: boolean = false; 

  constructor() { }

  ngOnInit(): void {
    // La lógica JS migrada a TypeScript
    setTimeout(() => {
      this.isActive = true; 
    }, 600);
  }
}