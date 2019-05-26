import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './password-old.validator';

@Component({
  selector: 'password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent {
  form: FormGroup;
  

  constructor(control: FormBuilder) { 
    this.form = control.group({
      old: ['', Validators.required, PasswordValidator.validPassword],
      new: ['', [Validators.required, Validators.minLength(8)]],
      repeat: ['', [Validators.required, Validators.minLength(8)]]
    }, {
      validator: PasswordValidator.passwordsShoulMatch
    });
  }


  get old() {
    return this.form.get('old');
  }

  get new(){
    return this.form.get('new');
  }
  
  get repeat(){
    return this.form.get('repeat');
  }


  submit() {
    console.log(this.form);
  }
  
}
