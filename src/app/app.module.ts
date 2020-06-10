import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';

import { AngularMaterialModule } from './angular-material.module';
import { EmployeeDataModule } from './employee-data/employee-data.module';
import { PublicModule } from './public/public.module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginComponent } from './public/login/login.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	AngularMaterialModule,
	EmployeeDataModule,
	PublicModule,
	ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
	AngularFireModule.initializeApp(environment.firebaseConfig, 'employee-portal'),
	AngularFirestoreModule,
	AngularFireStorageModule,
	AngularFireAuthModule,
	AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[
	LoginComponent
  ]
})
export class AppModule { }
