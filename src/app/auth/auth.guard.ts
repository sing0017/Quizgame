import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';
import { take, map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private quizService: QuizService, private router:Router){

  }
  canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot)
  :Observable<boolean>{
      return this.quizService.isLoggedIn
      .pipe(take(1),
      map((isLoggedIn:boolean) =>{
          if(!isLoggedIn){
               this.router.navigate(['./register']);
              return false;
          }
          return true;
      } )
      )
  }
}
