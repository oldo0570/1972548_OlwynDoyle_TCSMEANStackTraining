import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';
import { Questions } from '../questions';


@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {

  constructor(public router: Router, public _answersService: AnswersService) { }

  userdata: any;

  correct: Array<Questions> = [];
  ngOnInit(): void {
    //this._answersService.setupEvaluation().subscribe(result => this.correct = result);
  }

  submitAnswers(userRef: any) {
    sessionStorage.setItem("token", "123"); //this is required to be able to navigate to the results page
    this.router.navigate(["test2"]);
    this._answersService.storeAnswers(userRef);
    console.log(this._answersService.responses)
  }

  setup() {

  }
}
