import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string = "";
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  /* login() {
     sessionStorage.setItem("token", "123");
     this.router.navigate(["portfolio"]);
   }*/
  checkUser(loginRef: any) {
    console.log(loginRef);
    let user = loginRef.user;
    let pass = loginRef.pass;
    if (user == "Olwyn" && pass == "123") {
      this.msg = "Successful login";
      sessionStorage.setItem("token", "123");
      this.router.navigate(["portfolio"]);
    } else {
      this.msg = "Failure, try again";
    }
  }
}
