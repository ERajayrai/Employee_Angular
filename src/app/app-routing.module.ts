import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EducationsComponent } from './educations/educations.component';
import { DependantsComponent } from './dependants/dependants.component';
import { CurdEmployeeComponent } from './curd-employee/curd-employee.component';


const routes: Routes = [
  {path:'', component:EmployeesComponent},
  {path:'educations', component:EducationsComponent},
  {path:'dependants', component:DependantsComponent},
  {path:'search', component:CurdEmployeeComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
