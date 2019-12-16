import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';
 import {Question} from '../shared/question';
import {RegisterComponent} from '../register/register.component';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import{map} from 'rxjs/operators';
import { DragndropquizComponent } from '../dragndropquiz/dragndropquiz.component';
import { Location } from '@angular/common';
 
interface User{
  Name : string;
  email: string;
  Score: number;
  Scorefordrag: number;
}
 
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'] ,
  providers: [RegisterComponent , DragndropquizComponent  ]
})

export class QuizComponent implements OnInit {

   question = new Question();
   questionsCol: AngularFirestoreCollection<Question>;
   questions: any;
   participants: any;
   correctAnswerCount: number = 0;
   qnProgress: number = 1;   
   correct: string = '';
   number2: number = 0;

   
  constructor(private router: Router, 
    private registercomponent : RegisterComponent,
    private quizService: QuizService,
    private afs: AngularFirestore ,
    private dragndropcomponent : DragndropquizComponent,
    public _location: Location) { }

  
  ngOnInit(){
  this.correctAnswerCount;
   this.correct;
   //for getting data from the collection 'Question' in firestore
     this.questionsCol = this.afs.collection('Question');
    this.questions = this.questionsCol.snapshotChanges()
    .pipe(
        map(actions => {
            return actions.map(a => {
                 const data = a.payload.doc.data() as Question;
                const id = a.payload.doc.id;
                  return{id, data};
            });
        })
    );   
   
    
  }


//for restarting the quiz game which reload to the msin page
 restart() 
 {
   location.reload(true);
 }
 

 
//this method create a client inside users collection and store score of the user by the 'Score'
 submitanswer(){ 
  this.afs.collection('users')
  .doc(this.quizService.loggedInUser)
  .collection("clients")
  .add({
      Score: this.quizService.correctAnswerCount
    });    
}
 
 
}
