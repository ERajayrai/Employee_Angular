import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EducationsComponent } from './educations/educations.component';
import { DependantsComponent } from './dependants/dependants.component';
import { CurdEmployeeComponent } from './curd-employee/curd-employee.component';
import { CurdDependantsComponent } from './curd-dependants/curd-dependants.component';
import { CurdEducationComponent } from './curd-education/curd-education.component';


const routes: Routes = [
  {path:'', component:EmployeesComponent},
  {path:'educations', component:EducationsComponent},
  {path:'dependants', component:DependantsComponent},
  {path:'search', component:CurdEmployeeComponent},
  {path:'depandantsSearch', component:CurdDependantsComponent},
  {path:'EducationSearch', component:CurdEducationComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
