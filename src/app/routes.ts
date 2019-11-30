import {Routes} from '@angular/router'
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { AuthGuard } from './auth/auth.guard';
import {DragndropquizComponent} from './dragndropquiz/dragndropquiz.component';
import { ResultComponent } from './result/result.component';
import {DisplaypageComponent} from './displaypage/displaypage.component';

export const appRoutes : Routes =[
  {path:'',component:DisplaypageComponent   },
    {path:'register',component:RegisterComponent},
    {path:'quiz',component:QuizComponent, canActivate : [AuthGuard]  },
      {path:'drag',component:DragndropquizComponent , canActivate : [AuthGuard]  },
      {path:'result',component:ResultComponent, canActivate : [AuthGuard]  }



      
];