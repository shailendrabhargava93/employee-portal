import { NgModule }             		from '@angular/core';
import { RouterModule, Routes } 		from '@angular/router';

import { PublicComponent } from './public/public.component'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const publicRoutes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: '', component: PublicComponent, children: [
			{ path: '', redirectTo: 'login', pathMatch: 'full' },
			{ path: 'login', component: LoginComponent },
			{ path: 'register', component: RegisterComponent },
		] 
	},
];
 
@NgModule({
  	imports: [
		RouterModule.forChild(publicRoutes)
  	],
  	exports: [
    	RouterModule
  	]
})

export class PublicRoutingModule { }