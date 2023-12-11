import { Component, OnInit, Input } from '@angular/core';
import { Professional } from 'src/app/models/professional';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesionalService } from 'src/app/shared/profesional.service';
import { ProfessionalResponse } from 'src/app/models/professional-response';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  professionals: Professional[];
  firstName: String; //variable para almacenar el nombre y apellido de Busqqueda//
  lastName: String;


  constructor(private router: ActivatedRoute,
              private professionalService: ProfesionalService,
              private toastr: ToastrService,
              private route: Router,
              private formsModule: FormsModule)
              {
                this.firstName = ''; 
                this.lastName = '';  
              }



ngOnInit(): void {

}

searchProfessionalByName() {
  this.professionalService.getProfessionalByName(this.firstName, this.lastName).subscribe(
    (resp: ProfessionalResponse) => {
      console.log(ProfessionalResponse)
      console.log(this.firstName);
      console.log(this.lastName);
      if (resp.error) {
        this.professionalService.getAllProfessionals().subscribe((resp: ProfessionalResponse) => {
          this.professionals = resp.professionals;
          console.log(resp.professionals);
          console.log(this.professionals);
        },
        (error) => {
            console.error('Error al obtener todos los profesionales', error);
          }
        );
        this.toastr.error('No existe profesional con ese nombre y apellido');
      } else {
        this.toastr.success('Professional encontrado con exito');
        this.route.navigate(['/professional']);
        this.professionals = resp.professionals;
        console.log(resp.professionals)
   
      }
    },
    (error) => {
      console.error('Error al buscar el profesional por Nombre y Apellido', error);
    }
  );
}



}
