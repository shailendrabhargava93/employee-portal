import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { MatDatepickerInputEvent} from '@angular/material/datepicker';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService, Employee } from '../../employee-data/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registerform: FormGroup;
	minDate: Date;
	hide = true;
	
	constructor(private formBuilder: FormBuilder, private empService: EmployeeService, private router:Router) { 
		const currentYear = new Date().getFullYear();
		this.minDate = new Date(currentYear - 1, 0, 1);
	}

	ngOnInit() {
		this.registerform = this.formBuilder.group({
		  'name': [null, Validators.required],
		  'email': [null, Validators.required],
		  'password': [null, Validators.required],
		  'department': [null, Validators.required],
		  'doj': [null, Validators.required]
		});
	}
	
	dateChanged(event){
		if(event.value != null)
			this.registerform.controls['doj'].setValue(event.value);
	}
	
	submit(){
		console.log(this.registerform.value)
		let data = this.registerform.value;
		if(data.doj != null){
			data.doj = this.getReadableDate(data.doj);
		}
		this.empService.saveEmployee(data);
		alert('Success');
		this.router.navigate(['login']);
	}
	
	getReadableDate(doj:any){
		return doj.getDate()+"-"+(doj.getMonth()+1)+"-"+doj.getFullYear();
	}

}
