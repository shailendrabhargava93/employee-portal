import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public/public.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, PublicComponent],
  imports: [
    CommonModule,
	FormsModule,
	ReactiveFormsModule,
	AngularMaterialModule,
	PublicRoutingModule
  ]
})
export class PublicModule { }
