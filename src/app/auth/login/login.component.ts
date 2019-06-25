import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
