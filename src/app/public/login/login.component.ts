import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	hide = true;
	constructor(private router:Router) { }

	ngOnInit() {
	}
  
	goToList(){
		this.router.navigate(['employee-list']);
	}
	
	register(){
		this.router.navigate(['register']);
	}

}
