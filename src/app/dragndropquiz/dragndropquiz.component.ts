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
interface Drag2{
  Option: string[];
}
interface Drag3{
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
  drag2: any;
  drag3: any;

  dragCol1: AngularFirestoreCollection<Drag1>;
  dragCol2: AngularFirestoreCollection<Drag2>;
  dragCol3: AngularFirestoreCollection<Drag3>;

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
    this.dragCol2 = this.afs.collection('Drag2');
    this.drag2 = this.dragCol2.snapshotChanges()
    .pipe(
        map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data() as Drag2;
                const id = a.payload.doc.id;
                return{id, data};

            });
        })
    );
    this.dragCol3 = this.afs.collection('Drag3');
    this.drag3 = this.dragCol3.snapshotChanges()
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
  even2 = [''];
  even3 = [''];
  even4 = [''];



   drop(event: CdkDragDrop<string[]> , item: CdkDrag<string> ) {
    if (event.previousContainer === event.container) {
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex); 
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        if (event.item.data === 'https://firebasestorage.googleapis.com/v0/b/myfinalproject-e3283.appspot.com/o/sandvich.png?alt=media&token=d46a8f1d-20e0-4a0b-83ec-c2eeb3ef4e10'   ) {
                          this.correctAnswerCountfordrag++ ;
                          this.correctAnswerCountfordrag100 = this.correctAnswerCountfordrag * 100;
                          this.correct = 'Correct';
                          console.log(this.correctAnswerCountfordrag100 + this.correct);
                        }
                       else if (event.item.data === 'https://firebasestorage.googleapis.com/v0/b/myfinalproject-e3283.appspot.com/o/chocolatebar%20-%20Copy.png?alt=media&token=1c64d8d1-7ca5-43ff-a483-8f752c36dd19'   ) {
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
                        if (event.item.data === 'https://firebasestorage.googleapis.com/v0/b/myfinalproject-e3283.appspot.com/o/cap.png?alt=media&token=c3947b45-7802-4b33-80a5-2a1f4e7ec0c9' ) {
                          
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
  
  
   drop2(event: CdkDragDrop<string[]> , item: CdkDrag<string> ) {
    if (event.previousContainer === event.container) {
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex); 
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        if (event.item.data === 'https://firebasestorage.googleapis.com/v0/b/myfinalproject-e3283.appspot.com/o/cardboard.png?alt=media&token=cf10e352-3078-42aa-ab2c-bb3c350deb56' ) {
                          this.correctAnswerCountfordrag++ ;
                          this.correctAnswerCountfordrag100 = this.correctAnswerCountfordrag * 100;
                          this.correct = 'Correct';
                          console.log(this.correctAnswerCountfordrag100 + this.correct);
                        }
                        else if (event.item.data === 'https://firebasestorage.googleapis.com/v0/b/myfinalproject-e3283.appspot.com/o/table.png?alt=media&token=19ac9fdf-dc44-4cf6-a138-bbf32248b62a'   ) {
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
  
  drop3(event: CdkDragDrop<string[]> , item: CdkDrag<string> ) {
    if (event.previousContainer === event.container) {
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex); 
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        if (event.item.data === 'https://firebasestorage.googleapis.com/v0/b/myfinalproject-e3283.appspot.com/o/plast.png?alt=media&token=2c39b651-0ef1-4752-811f-b07eb6e37b78'  ) {
                          this.correctAnswerCountfordrag++ ;
                          this.correctAnswerCountfordrag100 = this.correctAnswerCountfordrag * 100;
                          this.correct = 'Correct';
                          console.log(this.correctAnswerCountfordrag100 + this.correct);
                        }
                        else if (event.item.data === 'https://firebasestorage.googleapis.com/v0/b/myfinalproject-e3283.appspot.com/o/plasticbag.png?alt=media&token=81fa025d-a84b-4a41-a838-81b500bca162'   ) {
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
