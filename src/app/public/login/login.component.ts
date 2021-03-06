import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService, Employee } from '../../employee-data/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	hide = true;
	loginform: FormGroup;
	EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	
	constructor(private formBuilder: FormBuilder, private empService: EmployeeService, private router:Router) { }

	ngOnInit() {
		this.loginform = this.formBuilder.group({
		  'email': [null, [Validators.required, Validators.pattern(this.EMAIL_REGEX)]],
		  'password': [null, Validators.required]
		});
	}
	
	register(){
		this.router.navigate(['register']);
	}
	
	login(){
		this.empService.checkAvailability(this.loginform.controls.email.value, this.loginform.controls.password.value).subscribe(result=>{
			if(result.length > 0){
				console.log(result[0]);
				alert('login successfull !!')
				this.router.navigate(['/employee/list']);
			}else{
				alert('Invalid email or password !!')
				this.loginform.reset();
			}
		})
		
	}

}
