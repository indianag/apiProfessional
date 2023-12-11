import { Component, OnInit, Input } from '@angular/core';
import { Professional } from 'src/app/models/professional';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesionalService } from 'src/app/shared/profesional.service';
import { ToastrService } from 'ngx-toastr';
import { ProfessionalResponse } from 'src/app/models/professional-response';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent implements OnInit{
  professionals: Professional[];


  constructor(private router: ActivatedRoute,
              private professionalService: ProfesionalService,
              private toastr: ToastrService){
               
            
              }



    ngOnInit(): void {
      this.professionalService.getAllProfessionals().subscribe(
        (resp: ProfessionalResponse) => {
          if (resp && resp.professionals) {
            this.professionals = resp.professionals;
          } else {
            // Manejar el caso en que resp o resp.professionals es null o undefined
            console.error('Error: La respuesta o la propiedad professionals es nula o indefinida.');
          }
        },
        (error) => {
          console.error('Error al obtener profesionales:', error);
        }
      );
    }


deleteProfesssional(firstName: string){
  this.professionalService.deleteProfessional(firstName).subscribe(
    (resp: ProfessionalResponse) => {
      console.log('Libro eliminado correctamente');
      
      // Después de eliminar, obtenemos la lista actualizada de libros
      this.professionalService.getAllProfessionals().subscribe(
        (resp: ProfessionalResponse) => {
          // Actualizamos la lista de libros en el componente
          this.professionals = resp.professionals;
        },
        error => {
          console.error('Error al obtener la lista actualizada de libros', error);
          // Manejar el error según tus necesidades
        }
      );

    },
    error => {
      console.error('Error al eliminar el libro', error);
      // Manejar el error según tus necesidades
    }
  );
}















}
