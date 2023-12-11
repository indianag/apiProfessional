import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Professional } from 'src/app/models/professional';
import { ProfesionalService } from 'src/app/shared/profesional.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  professionals: Professional[];
  @Input() datosProfessional: Professional
  @Output() eliminar = new EventEmitter<string>();
  @Input() even: Event;

    constructor(private professionalService: ProfesionalService){}

    eliminarTarjeta(profesional: Professional){

      this.eliminar.emit(profesional.firstName as string);
      console.log(profesional.firstName)
    }

}
