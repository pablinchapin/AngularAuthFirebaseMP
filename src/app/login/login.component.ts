import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email : '',
    password : ''
  };
  constructor(
    private authService: AuthService,
    private router : Router
  ) { }


  signInWithTwitter(){
    console.log('signInWithTwitter()');
    this.authService.signInWithTwitter()
      .then((res)=>{
        this.router.navigate(['dashboard'])
      })
      .catch((err)=>console.log(err));
  }


  signInWithFacebook(){
    console.log('signInWithFacebook()');
    this.authService.signInWithFacebook()
      .then((res)=> {
        this.router.navigate(['dashboard'])
      })
      .catch((err)=>console.log(err));
  }

  signInWithGoogle(){
    console.log('signInWithGoogle()');
    this.authService.signInWithGoogle()
      .then((res)=>{
        this.router.navigate(['dashboard'])
      })
      .catch((err)=>console.log(err));
  }

  signInWithGithub(){
    console.log('signInWithGithub()');
    this.authService.signInWithGithub()
      .then((res)=>{
        this.router.navigate(['dashboard'])
      })
      .catch((err)=>console.log(err));
  }

  signInRegular(){
    console.log('signInRegular()');
    this.authService.signInRegular(this.user.email, this.user.password)
      .then((res)=>{
        console.log(res);
        this.router.navigate(['dashboard'])
      })
      .catch((err)=>console.log(err));
  }
  

  ngOnInit() {
  }

}
