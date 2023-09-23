import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods:ContactMethod[]=[
    {
      id:1,
      name:'Email'
    },
    {
      id:2,
      name:'SMS'
    }
  ];
  genders:Gender[] = [
    {
      id:1,
      name:'Male'
    },
    {
      id:2,
      name:'Female'
    }
  ]

  log(x: any){console.log(x);}

  onSubmit(form: any){
    console.log(form.value);
  }
}

export interface ContactMethod{

  id:number,
  name:string
}
export interface Gender{

  id:number,
  name:string
}