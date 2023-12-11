import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/page/home/home.component';
import { AddComponent } from '../app/page/add/add.component';
import { UpdateComponent } from '../app/page/update/update.component';
import { ProfessionalsComponent } from '../app/page/professionals/professionals.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "add", component: AddComponent},
  {path: "update", component: UpdateComponent},
  {path: "professional", component: ProfessionalsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
