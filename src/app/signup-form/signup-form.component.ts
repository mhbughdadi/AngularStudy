import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from '../common/validators/username-validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form= new FormGroup({
    account: new FormGroup({
      accountNumber: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpaces
      ]),
      accountType: new FormControl()
    }),
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      UsernameValidators.cannotContainSpaces
    ],
    [
      UsernameValidators.shouldBeUnique
    ]),
    password: new FormControl('',Validators.required),
    topics: new FormArray([])
  });

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  login() {
   
    console.log(this.form.value);
    this.form.setErrors({
      uniqueValues:true
    });
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value= '';
  }

  removeTopic(topic: AbstractControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(((index)));
  }

  get topics (){
    return this.form.get('topics') as FormArray;
  }

  get accountNumber (){
    return this.form.get('account.accountNumber');
  }

  get account (){
    return this.form.get('account');
  }


}
