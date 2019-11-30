import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import{AngularFireAuthModule} from 'angularfire2/auth';
import{AngularFirestoreModule} from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';

import{ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
 import { QuizService } from './shared/quiz.service';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { appRoutes } from './routes';
import { AuthGuard } from './auth/auth.guard';
import { DragndropquizComponent } from './dragndropquiz/dragndropquiz.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ResultComponent } from './result/result.component';
import { DisplaypageComponent } from './displaypage/displaypage.component';
 



var config= {
  apiKey: "AIzaSyABeYJnzrpA0WyVUvNjgSx7NZbUF-9RxVw",
    authDomain: "myfinalproject-e3283.firebaseapp.com",
    databaseURL: "https://myfinalproject-e3283.firebaseio.com",
    projectId: "myfinalproject-e3283",
    storageBucket: "myfinalproject-e3283.appspot.com",
    messagingSenderId: "180999628871",
    appId: "1:180999628871:web:6d36ba661bb16ef2bae962",
    measurementId: "G-1TSLJS7CHL"
};
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    QuizComponent,
    DragndropquizComponent,
    ResultComponent,
    DisplaypageComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    DragDropModule

  ],
  providers: [QuizService,AuthGuard, DragndropquizComponent , ResultComponent , RegisterComponent, QuizComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
