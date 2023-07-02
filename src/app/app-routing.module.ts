import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmoloyeeComponent } from './update-emoloyee/update-emoloyee.component';

const routes: Routes = [
  {path:'employees' , component: EmployeeListComponent},
  {path: 'create-employee' , component: CreateEmployeeComponent},
  {path:'' , redirectTo: 'employees' , pathMatch: 'full' },
  {path: 'update-employee/:id', component: UpdateEmoloyeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
