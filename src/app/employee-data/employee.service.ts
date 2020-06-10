import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

export interface Employee{
	empId: string;
	name: string;
	email: string;
	department: string;
	doj: string;
}

@Injectable({
  providedIn: 'root'
})


export class EmployeeService {
	
	employeeList: AngularFirestoreCollection<any>; 

	constructor(private httpClient: HttpClient, private cloudStoreDB: AngularFirestore) { }
	
	
	getEmployeeList(){
		this.employeeList = this.cloudStoreDB.collection('/employee-list');
		return this.employeeList;
	}
	
	saveEmployee(data:any){
		this.cloudStoreDB.collection('/employee-list').add(data);
	}
}
