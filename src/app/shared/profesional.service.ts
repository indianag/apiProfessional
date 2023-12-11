import { Injectable } from '@angular/core';
import { Professional } from '../models/professional';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {
  private apiUrl =  'http://localhost:3000';

  constructor(private http: HttpClient,
              private toastr: ToastrService) { }



getAllProfessionals(){
  return this.http.get(`${this.apiUrl}/professional/all`);
}

getProfessionalByName(firstName: String, lastName: String): Observable<any> {
  return this.http.get(`${this.apiUrl}/professional?firstName=${firstName}&lastName=${lastName}`);
}

createProfessional(professional: any){
  return this.http.post(`${this.apiUrl}/professional`, professional);
}

updateProfessional(professional: Professional):Observable<any> {
  return this.http.put(`${this.apiUrl}/professional`, professional);
}

deleteProfessional(firstName: String): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    body: { firstName: firstName } 
  };

  return this.http.delete(`${this.apiUrl}/professional`, httpOptions);
}
}





















// <div class="bienvenido">
//     <div class="form-body">
//         <p class="text">Crear un Profesional</p>
//         <form  class="login-form">
//             <input type="text" [(ngModel)]="firstName" name="firstName" placeholder="nombre" />
//             <input type="text" [(ngModel)]="lastName" name="lastName" placeholder="apellido" />
//             <input type="Number" [(ngModel)]="age" name="age"placeholder="edad" />
//             <input type="Number" [(ngModel)]="weight" name="weight" placeholder="peso" />
//             <input type="Number" [(ngModel)]="weight" name="weight" placeholder="altura" />
//             <input type="text" [(ngModel)]="height" name="height"  placeholder="Es retirado?" />
//             <input type="text" [(ngModel)]="nationality" name="nationality" placeholder="Nacionalidad" />
//             <input type="Number" [(ngModel)]="oscarsNumber" name="oscarsNumber"  placeholder="numero de Oscares" />
//             <input type="text" [(ngModel)]="profession" name="weight"placeholder="profession" />
//             <button (click)="addProfessional(firstName.value, lastName.value, age.value, weight.value, height.value, isRetired.value, nationality.value, oscarsNumber.value, profession.value)" type="button">Crear</button>
//         </form>
//     </div>
// </div>