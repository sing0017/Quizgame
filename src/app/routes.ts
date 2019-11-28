import {Routes} from '@angular/router'
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { AuthGuard } from './auth/auth.guard';
import {DragndropquizComponent} from './dragndropquiz/dragndropquiz.component';

export const appRoutes : Routes =[
    {path:'register',component:RegisterComponent},
    {path:'quiz',component:QuizComponent  },
     {path:'',redirectTo:'/register',pathMatch:'full'},
     {path:'drag',component:DragndropquizComponent  }

];