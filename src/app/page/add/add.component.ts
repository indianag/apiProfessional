import { Component } from '@angular/core';
import { ProfesionalService } from 'src/app/shared/profesional.service';
import { Professional } from 'src/app/models/professional';
import { Router } from '@angular/router';
import { ProfessionalResponse } from 'src/app/models/professional-response';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  professional: Professional[];

  constructor(private professionalService: ProfesionalService,
              private router: Router,
              private toastr: ToastrService){}
  



addProfessional(firstName: String, lastName: String, age: string, weight: string, height: string, isRetired: boolean, nationality: String, oscarsNumber: string, profession: String) {
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
  this.professionalService.createProfessional(nuevoProfessional).subscribe((resp: ProfessionalResponse) => {
    console.log(resp);
    console.log(nuevoProfessional);
    
    if (!resp.error) {
      this.toastr.success('Professional creado con exito');
      
      this.router.navigate(['/professional']);
    } else {
      this.toastr.error('Error al crear nuevo profesional');
    }
  });

}

}
