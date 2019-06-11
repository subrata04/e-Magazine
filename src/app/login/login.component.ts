import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginform: FormGroup;

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) {

  }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email:["", [ Validators.required, Validators.email, Validators.maxLength(100)] ],
      password:["",Validators.required],
    })

  }


}
