import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, DragDropModule , moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { isNgTemplate } from '@angular/compiler';
import { QuizService } from '../shared/quiz.service';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
interface Drag{
  Option: string[];
}
interface Drag1{
  Option: string[];
}
@Component({
  selector: 'app-dragndropquiz',
  templateUrl: './dragndropquiz.component.html',
  styleUrls: ['./dragndropquiz.component.css'],
  providers: [RegisterComponent ]

})
export class DragndropquizComponent implements OnInit {
  dragCol: AngularFirestoreCollection<Drag>;
  drag: any;
  dragCol1: AngularFirestoreCollection<Drag1>;
  drag1: any;
  optionss: any;
  correctAnswerCountfordrag: number = 0;
  correctAnswerCountfordrag100: number = 0;
  correct: string = '';
  incorrect: string = '';


 


  data: any;
  constructor(private afs: AngularFirestore , private quizService: QuizService, private router: Router) { }
  ngOnInit() {
     // this.quizService.getCurrentUser();
     //this.quizService.loggedInUser;

    this.dragCol = this.afs.collection('Drag');
    this.drag = this.dragCol.snapshotChanges()
    .pipe(
        map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data() as Drag;
                const id = a.payload.doc.id;
                return{id, data};

            });
        })
    ); 
    this.dragCol1 = this.afs.collection('Drag1');
    this.drag1 = this.dragCol1.snapshotChanges()
    .pipe(
        map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data() as Drag1;
                const id = a.payload.doc.id;
                return{id, data};

            });
        })
    );
   
  }
    even = [''];
  even1 = [''];
   drop(event: CdkDragDrop<string[]> , item: CdkDrag<string> ) {
    if (event.previousContainer === event.container) {
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex); 
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        if (event.item.data === 'Volvo') {
                          this.correctAnswerCountfordrag++ ;
                          this.correctAnswerCountfordrag100 = this.correctAnswerCountfordrag * 100;
                          this.correct = 'Correct';
                          console.log(this.correctAnswerCountfordrag100 + this.correct);
                        }
                        else{
                          this.correctAnswerCountfordrag-- ;
                          this.correctAnswerCountfordrag100 = this.correctAnswerCountfordrag *100;
                          this.correct = 'InCorrect';
                          console.log(this.correctAnswerCountfordrag100 + this.correct);


                        }
                       
    }
  }
  drop1(event: CdkDragDrop<string[]> , item: CdkDrag<string> ) {
    if (event.previousContainer === event.container) {
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex); 
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        if (event.item.data === 'hummer') {
                          
                          this.correctAnswerCountfordrag++ ;
                          this.correctAnswerCountfordrag100 = this.correctAnswerCountfordrag * 100;
                          console.log(this.correctAnswerCountfordrag100);
                          this.correct = 'Correct';
                          console.log(this.correctAnswerCountfordrag100 + this.correct);
                        }
                        else{
                          this.correctAnswerCountfordrag-- ;
                          this.correctAnswerCountfordrag100 = this.correctAnswerCountfordrag *100;
                          this.correct = 'InCorrect';
                          console.log(this.correctAnswerCountfordrag100 + this.correct);

                        }
                       
    }
  }
  
  
 
  
 restart() {
  location.reload(true);
  
}
 submit(){ 
  this.afs.collection('users')
  .doc(this.quizService.loggedInUser)
  .collection("clients")
  .add({
       Scorefordrag: this.correctAnswerCountfordrag
    
   });
 }
  //evenPredicate1(item1: CdkDrag<string>) {
    //return item1.data  === 'hummer';
  //}
   noReturnPredicate() {
    return false;
  }

}
