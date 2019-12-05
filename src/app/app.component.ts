import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizService } from './shared/quiz.service';
import { QuizComponent } from './quiz/quiz.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Observable<boolean>;
  constructor(private quizService: QuizService , private quizcomponent: QuizComponent){

  }
  ngOnInit(){
       this.quizService.getCurrentUser();
    
    }
  }
