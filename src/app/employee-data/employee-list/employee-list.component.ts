import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList:  Array<Employee>;
  
  constructor(private empService : EmployeeService){}
  
	ngOnInit(){
		this.fetchData();
	}
	
	fetchData(){
		this.empService.getEmployeeList().valueChanges().subscribe(data => {
		  this.employeeList = [];
		  data.forEach(item => {
			  if(item.name != 'admin')
				this.employeeList.push(item);
		  })
		})
	}

}
