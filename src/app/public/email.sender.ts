import { Injectable } from '@angular/core';
import { Observable } from  'rxjs';
import './../../../assets/js/smtp.js';
declare var Email:any;


@Injectable({
  providedIn: 'root'
})


export class EmailSender { 

	constructor() { }
	
	
	sendEmail(){
		Email.send({
			Host : 'smtp.elasticemail.com',
			Username : 'democompanyportal@gmail.com',
			Password : '1355485B29EA74980A5517AE60442B8286DF',
			To : 'shelen1993@gmail.com',
			From : 'democompanyportal@gmail.com',
			Subject : 'Test Mail',
			Body : `
			<i>Thank you for choosing Company Portal Email!</i> <br/><br /><br> `
			}).then( message => {
				alert(message);
			} );
	}
}
