import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  authForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.authForm = new FormGroup(
      {
        contactName: new FormControl(),
        email: new FormControl(),
        password: new FormControl()
      }
    );
  }

}
