import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';
import {Participant} from '../register/Participant';
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

  participant = new Participant();
   question = new Question();
  questionsCol: AngularFirestoreCollection<Question>;
  participantsCol: AngularFirestoreCollection<Participant>;

   questions: any;
   participants: any;
     correctAnswerCount: number = 0;
   qnProgress: number = 1;
   
   optionss: any;
   usersCol: AngularFirestoreCollection<User>;
   users: any;
   userCol: AngularFirestoreCollection<User>;
   use: any;
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
    this.usersCol = this.afs.collection('users/' + this.quizService.loggedInUser + "/clients/");
    this.users = this.usersCol.snapshotChanges()
    .pipe(
        map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data() as User;
                const id = a.payload.doc.id;
                return{id, data};
               
            });
        })
    );
    this.userCol = this.afs.collection('users');
    this.use = this.usersCol.get().toPromise()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
  });
    this.optionss = this.question.Option;
 }

 restart() {
  location.reload(true);
    }
 

 close(){
  localStorage.setItem('correctAnswerCount', "0");
 }

 submitanswer(){ 
  this.afs.collection('users')
  .doc(this.quizService.loggedInUser)
  .collection("clients")
  .add({
      Score: this.quizService.correctAnswerCount
    });    
}
 
 
}
