import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent  {
  categorys = [
    {id: 1, name: 'Developerment'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Languages'}
  ];

  submit(f) {
    console.log(f); 
  }
  onChange(f) {
    console.log(f);
  }
}
