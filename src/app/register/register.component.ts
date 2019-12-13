import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';
import { FormBuilder , FormGroup  , Validators} from '@angular/forms';
//import {PassworValidator} from './passwordValidator';
//import { QuizService } from './login.service';
import {ActivatedRoute} from '@angular/router';
 import {AngularFirestore , AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { BehaviorSubject } from 'rxjs';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  form: FormGroup;
  
  naame: string = 'harman';
  title: string;
  invalidLoginMessage;
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedInUser;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(fb: FormBuilder,
    private quizService : QuizService,
    private route : Router,
    private afs: AngularFirestore,
     private _route:ActivatedRoute ,
     private afAuth: AngularFireAuth) 
  {
    this.form = fb.group({
      Name:[``]  
          
  })
   }
  
  ngOnInit(){
       this.title = "New User";
       this.naame = this.form.controls['Name'].value;

}
onSignup(){
  var result = this.quizService.signup(
      this.form.controls['Name'].value); 
}
login(){
  var result = this.quizService.login(
    this.form.controls['Name'].value);
   
}
  
  }
