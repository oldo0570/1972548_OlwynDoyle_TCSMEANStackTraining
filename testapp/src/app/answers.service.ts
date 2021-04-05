import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { Questions } from './questions'

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  responses: any;
  check: Array<number> = [];
  quizData: any;
  correct: Array<number> = [3, 1, 2, 4, 1, 3, 3, 1, 4, 2];
  assess: Array<boolean> = [];
  userScore: number = 0;
  constructor(private http: HttpClient) { }

  storeAnswers(answers: any) {
    this.http.post("http://localhost:3000/questions", answers).subscribe(result => console.log(result), error => console.log(error));
    this.responses = answers;
   
    for (const k in this.responses) {
      const v = Number(this.responses[k]);
      this.check.push(v);
    }
    //console.log(this.check);
    this.correct.forEach((q, index) => {
      const r = this.check[index];
      //console.log(q, r);
      if (q == r) {
        this.userScore = this.userScore + 1;
        this.assess.push(true);
      } else {
        this.assess.push(false);
      }
    })
    sessionStorage.setItem('assess', String(this.assess));
    sessionStorage.setItem('userAnswers', String(this.check));
    sessionStorage.setItem('correctAnswers', String(this.correct));
    sessionStorage.setItem('score', String(this.userScore));
    console.log("Answers stored");
  }
  getAnswers(): Observable<Questions[]> {
    //this.quizData = this.http.get<Questions[]>('http://localhost:3000/questions');
    this.quizData = this.http.get<Questions[]>('http://localhost:3000/questions?id!=1');
    let temp = JSON.stringify(this.quizData);
    //let data = JSON.parse(temp);
    
    return this.http.get<Questions[]>('http://localhost:3000/questions');
  }
  getScore(): number {
    return this.userScore;
  }
}
