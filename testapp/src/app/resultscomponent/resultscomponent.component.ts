import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';
import { Questions } from '../questions';


@Component({
  selector: 'app-resultscomponent',
  templateUrl: './resultscomponent.component.html',
  styleUrls: ['./resultscomponent.component.css']
})
export class ResultscomponentComponent implements OnInit {

  constructor(public router: Router, public _answersService: AnswersService) { }
  answers: Array<Questions> = [];
  userScore: number = -1;
  pass: Boolean = false;
  correctAnswers: Array<number> = [];
  question1msg: string = '';
  question2msg: string = '';
  question3msg: string = '';
  question4msg: string = '';
  question5msg: string = '';
  question6msg: string = '';
  question7msg: string = '';
  question8msg: string = '';
  question9msg: string = '';
  question10msg: string = '';
  successmsg: string = '';
  valid: Array<boolean>= [];

  ngOnInit(): void {
    this._answersService.getAnswers().subscribe(result => this.answers = result);
    this.userScore = Number(sessionStorage.getItem('score'));
    let temp = sessionStorage.getItem('correctAnswers');
    if (temp != null) {
      this.correctAnswers = temp.split(',').map(Number);
    }
    console.log(this.userScore);
    if (this.userScore >= 6) {
      this.pass = true;
      console.log("You passed!");
      this.successmsg= "You passed! Your score was " + this.userScore + " out of 10.";
    } else {
      console.log("You failed.")
      this.successmsg ="You failed. Your score was " + this.userScore + " out of 10.";
    }
    let temp2 = sessionStorage.getItem('assess');
    if (temp2 != null) {
      let tempp = temp2.split(',');
      for (let each of tempp) {
        this.valid.push(each =="true");
      }
    }

    if (this.valid[0] == true) {
      this.question1msg = "Correct Answer Selected";
    } else {
      this.question1msg = "Incorrect Answer Selected. Correct answer selected above.";
    }
    if (this.valid[1] == true) {
      this.question2msg = "Correct Answer Selected";
    } else {
      this.question2msg = "Incorrect Answer Selected. Correct answer selected above.";
    }
    if (this.valid[2] == true) {
      this.question3msg = "Correct Answer Selected";
    } else {
      this.question3msg = "Incorrect Answer Selected. Correct answer selected above.";
    }
    if (this.valid[3] == true) {
      this.question4msg = "Correct Answer Selected";
    } else {
      this.question4msg = "Incorrect Answer Selected. Correct answer selected above.";
    }
    if (this.valid[4] == true) {
      this.question5msg = "Correct Answer Selected";
    } else {
      this.question5msg = "Incorrect Answer Selected. Correct answer selected above.";
    }
    if (this.valid[5] == true) {
      this.question6msg = "Correct Answer Selected";
    } else {
      this.question6msg = "Incorrect Answer Selected. Correct answer selected above.";
    }
    if (this.valid[6] == true) {
      this.question7msg = "Correct Answer Selected";
    } else {
      this.question7msg = "Incorrect Answer Selected. Correct answer selected above.";
    }
    if (this.valid[7] == true) {
      this.question8msg = "Correct Answer Selected";
    } else {
      this.question8msg = "Incorrect Answer Selected. Correct answer selected above.";
    }
    if (this.valid[8] == true) {
      this.question9msg = "Correct Answer Selected";
    } else {
      this.question9msg = "Incorrect Answer Selected. Correct answer selected above.";
    }
    if (this.valid[9] == true) {
      this.question10msg = "Correct Answer Selected";
    } else {
      this.question10msg = "Incorrect Answer Selected. Correct answer selected above.";
    }
  }

}
