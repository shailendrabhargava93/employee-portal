import { NgModule }             		from '@angular/core';
import { RouterModule, Routes } 		from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const employeeRoutes: Routes = [
	{ path: 'employee', children: [
			{ path: 'list', component: EmployeeListComponent },

		] 
	},
];

@NgModule({
  declarations: [],
  imports: [
		RouterModule.forChild(employeeRoutes)
  ],
  exports: [
    	RouterModule
  ]
})
export class EmployeeDataRoutingModule { }
