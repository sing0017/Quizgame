import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private quizService : QuizService,private router : Router , private afAuth: AngularFireAuth ) { }

  ngOnInit() {
  }

 
  DragnDrop(){
    this.router.navigate(['/drag']);
  }
  Normal(){
    this.router.navigate(['/quiz']);
  }

}
