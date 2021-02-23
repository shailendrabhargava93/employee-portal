import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AngularMaterialModule } from '../angular-material.module';
import { EmployeeDataRoutingModule } from './employee-data-routing.module';

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
	AngularMaterialModule,
	EmployeeDataRoutingModule,
  ]
})
export class EmployeeDataModule { }
