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
                this.loggedIn.next(true);   
                this.loggedInUser = authState.user.uid;
                this.loggedInUsername = authState.user.email;  
                this.loggedInUserdname = authState.user.displayName;                             
                this.router.navigate(['']);
                console.log(authState.user.displayName);
            }
        )
          }
          getCurrentUser(){       
            return this.afAuth.authState.subscribe(authState => {
                if(authState){
                    this.loggedIn.next(true);   
                    this.loggedInUser=authState.uid;    
                    this.loggedInUsername = authState.email;         
                    this.router.navigate(['/']);                     
                    console.log("logged in as " + authState.uid);
                } 
                else{
                  this.router.navigate(['register']);                      
                }           
              });           
          } 
       
          login(username, password: string = '123456'){       
            if(username !== '' && password !== ''){                 
                return this.afAuth.auth.signInWithEmailAndPassword(username,password)
                    .then(authState => {          
                        console.log("Login-then",authState);    
                        this.loggedIn.next(true);  
                        this.loggedInUser=authState.user.uid; 
                        this.loggedInUsername = authState.user.email;               
                        this.router.navigate(['/']);                      
                    })
                    .catch(
                        error => {                    
                            this.router.navigate(['login/' + error.message]);
                            console.log(error);                
                        }                                          
                    );    
            }   
          }
          SignOut() {
            this.loggedIn.next(false);      
            this.afAuth.auth.signOut();     
            this.loggedInUser=null;    
              this.router.navigate(['/register']);
          }
   
}
