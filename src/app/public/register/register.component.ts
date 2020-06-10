import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService, Employee } from '../../employee-data/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registerform: FormGroup;
	constructor(private formBuilder: FormBuilder, private empService: EmployeeService, private router:Router) { }

	ngOnInit() {
		this.registerform = this.formBuilder.group({
		  'name': [null, Validators.required],
		  'email': [null, Validators.required],
		  'password': [null, Validators.required],
		  'doj': [null, Validators.required]
		});
	}
	
	submit(){
		console.log(this.registerform.value)
		let data = this.registerform.value;
		if(data.doj != null){
			data.doj = data.doj.getUTCDate()+"-"+(data.doj.getUTCMonth()+1)+"-"+data.doj.getUTCFullYear();
		}
		this.empService.saveEmployee(data);
		alert('Success');
		this.router.navigate(['login']);
	}

}
