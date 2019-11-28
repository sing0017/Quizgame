import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Question} from './question';
 
@Injectable()
export class QuizService {
  
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedInUser;
  loggedInUsername: string;
  loggedInUserdname: string = 'harman';


 
  questions: Observable<Question[]>;

  constructor( private router:Router,
    private afAuth: AngularFireAuth , 
    private http: HttpClient , 
    private afs: AngularFirestore){
  }
  
  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;
  password: string = '123456';

  get isLoggedIn(){
    return this.loggedIn.asObservable();        
  }  

  signup(Name: string ,  password: string = '123456' ){ 
    return this.afAuth.auth.createUserWithEmailAndPassword(Name, password)    
        .then( 
            authState => {
                console.log("signup-then", authState);  
                //this.loggedIn.next(true);   
                this.loggedInUser = authState.user.uid;
                this.loggedInUsername = authState.user.email;  
                this.loggedInUserdname = authState.user.displayName;                             
                this.router.navigate(['/drag']);
                console.log(authState.user.displayName);
            }
        )
          }
 
   
}
