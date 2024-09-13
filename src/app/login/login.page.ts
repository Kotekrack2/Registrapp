import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';  
  password: string = '';  

  constructor(private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    
    this.saveUsername(this.email);

    
    this.router.navigateByUrl('/inicio');
  }

  recoverPassword() {
    this.router.navigateByUrl('/recuperarpass'); 
  }

  saveUsername(email: string) {
    localStorage.setItem('email', email);
    console.log('Nombre de usuario guardado en localStorage:', email);
  }
}
