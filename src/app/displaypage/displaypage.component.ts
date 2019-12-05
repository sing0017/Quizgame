import { Component } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { RegisterComponent } from '../register/register.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displaypage',
  templateUrl: './displaypage.component.html',
  styleUrls: ['./displaypage.component.css']
})
export class DisplaypageComponent  {
  form: FormGroup;
  invalidLoginMessage;

  constructor(fb: FormBuilder, private quizservice : QuizService , private resistercomponent : RegisterComponent , private _route:ActivatedRoute)
   {
    this.form = fb.group({
      Name:[``, Validators.required] 
    })
   }
  
   ngOnInit(){
    this._route.params.subscribe(params => {
      this.invalidLoginMessage = params["invalidLoginMessage"];
      console.log(this.invalidLoginMessage);
  });
   }
  onSignup(){
    var result = this.quizservice.signup(
        this.form.controls['Name'].value); 
 
  }
  login(){
    var result = this.quizservice.login(
      this.form.controls['Name'].value);
     
  }

}
