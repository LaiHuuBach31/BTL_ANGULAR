import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData = new FormGroup ({
    firstName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    lastName   : new FormControl('', [Validators.required, Validators.minLength(3)]),
    userName   : new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

  get f():any{
    return this.formData.controls;
  }
}
