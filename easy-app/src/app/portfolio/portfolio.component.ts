import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  user: string = "Olwyn";
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  name: string = "";
  num: string = "";
  addTable(tableRef: any) {
    this.name = tableRef.name;
    this.num = tableRef.num;
    let obj = JSON.stringify(tableRef);
    console.log(obj);
    sessionStorage.setItem("projectInfo", obj);

  }

  logout() {
    sessionStorage.removeItem("token");
    this.router.navigate(["login"]);
  }
}
