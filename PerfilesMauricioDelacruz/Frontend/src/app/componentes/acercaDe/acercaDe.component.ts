import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/Modelo/persona.model';
import { PersonaService } from 'src/app/Servicio/persona.service';

@Component({
  selector: 'app-acercaDe',
  templateUrl: './acercaDe.component.html',
  styleUrls: ['./acercaDe.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
