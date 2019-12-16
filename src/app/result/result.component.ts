import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { QuizComponent } from '../quiz/quiz.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: []

})
export class ResultComponent implements OnInit {
  ccc: number = 0;
  constructor( private quizService : QuizService, private quizcomponent: QuizComponent ) { }
  
  ngOnInit() {
    
   }

}
