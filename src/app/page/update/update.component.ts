import { Component } from '@angular/core';
import { ProfesionalService } from 'src/app/shared/profesional.service';
import { Professional } from 'src/app/models/professional';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessionalResponse } from 'src/app/models/professional-response';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  professional: Professional[];

  constructor(private professionalService: ProfesionalService,
    private router: Router,
    private toastr: ToastrService){}
    

updateProfessional(firstName: String, lastName: String, age: string, weight: string, height: string, isRetired: boolean, nationality: String, oscarsNumber: string, profession: String){
  const ageNumber = parseInt(age, 10);
  const weightNumber = parseFloat(weight);
  const heightNumber = parseFloat(height);
  const oscarsNumberValue = parseInt(oscarsNumber, 10);
 
  let nuevoProfessional = new Professional(
    
    firstName,
    lastName,
    ageNumber,
    weightNumber, 
    heightNumber, 
    isRetired,
    nationality,
    oscarsNumberValue,
    profession
  );
  this.professionalService.updateProfessional(nuevoProfessional).subscribe(
    (resp: ProfessionalResponse) => {
      if (!resp.error) {
        this.toastr.success('Datos del profesional modificado con exito');
        this.router.navigate(['/professional']);
      } else {
        this.toastr.error('No existe profesional con ese nombre');
      }
    }

)}












}
