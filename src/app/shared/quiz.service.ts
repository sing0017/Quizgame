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
    resstart = new BehaviorSubject<boolean>(false);

  loggedInUser;
  loggedInUsername: string;
  loggedInUserdname: string = 'harman';
  numnber:Number = 0;
  number2: number = 0;



 
  questions: Observable<Question[]>;
  quizcomponent: any;

  constructor( private router:Router,
    private afAuth: AngularFireAuth , 
    private http: HttpClient , 
    private afs: AngularFirestore){
  }
  correct: string = '';
  correct1: string = '';

  qns: any[];
  seconds: number;
  timer;
  qnProgress: number = 1;
  correctAnswerCount: number = 0;
  password: string = '123456';

  get isLoggedIn(){
    return this.loggedIn.asObservable();  
        
  }  

  //For signin the user
  signup(Name: string ,   password: string = '123456' )
  { 
    return this.afAuth.auth.createUserWithEmailAndPassword(Name, password)    
        .then( 
            authState => {
                console.log("signup-then", authState);  
                this.loggedIn.next(true); 
                this.numnber = 1;   
                this.loggedInUser = authState.user.uid;
                this.loggedInUsername = authState.user.email;  
                this.loggedInUserdname = authState.user.displayName;                             
                this.router.navigate(['/drag']);
                location.reload(true);                 
                console.log(authState.user.displayName);
            }
        )
        .catch(
          error => {
              var errorMessage = error.message;
              console.log(error);                
          }
      ); 
          }

//---get the current state of user and put it on ngonit on app component 
//so that whenever we refresh the page user dont lost it state and redirected to login page ----
  getCurrentUser()
  {       
            return this.afAuth.authState.subscribe(authState => {
                if(authState){
                    this.loggedIn.next(true); 
                    this.numnber = 1;   
                    this.loggedInUser=authState.uid;    
                    this.loggedInUsername = authState.email.slice(0 , -10).toUpperCase();   
                    this.router.navigate(['/']);                     
                    console.log("logged in as " + authState.uid);
                   
                } 
                else{
                  this.router.navigate(['']);                      
                }           
              });           
          } 
         
          getCurrentUser1()
          {       
                    return this.afAuth.authState.subscribe(authState => {
                        if(authState){
                            this.loggedIn.next(true); 
                            this.numnber = 1;   
                            this.loggedInUser=authState.uid;    
                            this.loggedInUsername = authState.email.charAt(0).toUpperCase();         
                            this.router.navigate(['/quiz']);                     
                            console.log("logged in as " + authState.uid);
                          
                        } 
                        else{
                          this.router.navigate(['quiz']);                      
                        }           
                      });           
                  } 
        
  //For login the user if he/she already a user   
  login(username  , password: string = '123456'){       
            if(username !== '' && password !== ''){                 
                return this.afAuth.auth.signInWithEmailAndPassword(username,password)
                    .then(authState => {          
                        console.log("Login-then",authState);    
                        this.loggedIn.next(true); 
                        this.numnber = 1; 
                        this.loggedInUser=authState.user.uid; 
                        this.loggedInUsername = authState.user.email.charAt(0).toUpperCase();               
                        this.router.navigate(['']);   
                        location.reload(true);                 
                    })
                    .catch(
                        error => {                    
                            this.router.navigate(['login/' + error.message]);
                            console.log(error);                
                        }                                          
                    );    
            }   
          }
  //---for signout and make the loggedin state false so that when user try to reload the page it dont navigate back to
  //the front page cuase of logged in state true----  
  SignOut() {
            this.loggedIn.next(false);      
            this.afAuth.auth.signOut();
            this.numnber = 0;      
            this.loggedInUser=null;    
              this.router.navigate(['/']);
              location.reload(true);
          }
//----this method for getting the answer on the basis of user selected choice and then on the basis of correct answer
//run the else if statement to display the result and finally navigate to result page to see the result.---
  Answer( qID , choice) 
  { 
 
     if (choice != -1) {
              
          if (qID ==  choice)
                { 
                 this.correctAnswerCount++;
                 this.correct1 = 'Correct';
              
              if (this.correctAnswerCount >= 5)
               {
               this.correct = 'Bravo';
               console.log(this.correct);
               }
             else if (this.correctAnswerCount >= 3) 
             {
               this.correct = 'Not Bad';
               console.log(this.correct);
             }
             else if (this.correctAnswerCount <= 0)
              {
               this.correct = 'Try once Again';
               console.log(this.correct);
             }
           
              console.log('correct' + this.correctAnswerCount);
        
              }
              else if(qID !=  choice)
              {
                if (this.correctAnswerCount >= 0)
                {
                this.correct = 'come on';
                console.log(this.correct);
                }
                this.correct1 = 'InCorrect';
              }
              
              this.qnProgress++;
              if (this.qnProgress == 6) {

                  this.router.navigate(['result']);
              }
             
            }
         
            else{
              console.log('incorrect' );
            }
          }

          
        
   
}
