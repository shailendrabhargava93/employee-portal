import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
	AngularMaterialModule,
  ]
})
export class EmployeeDataModule { }
