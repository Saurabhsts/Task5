import { AnimationMetadataType } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  myReactiveform: FormGroup;
  list = [];
  @ViewChild('ReactiveFormsModule') myReactiveforms: NgForm;
  // formdata: any;
  //   firstname: 'sss',
  //   lastname: '',
  //   phonenumber: '',
  //   email: '',
  //   accountnumber: '',
  //   ifsccode: '',
  //   notes: '',
  // ];

  constructor() {}

  ngOnInit(): void {
    this.myReactiveform = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      gender: new FormControl('default', [Validators.required]),
      phonenumber: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      accountnumber: new FormControl(null, Validators.required),
      ifsccode: new FormControl(null, Validators.required),
      notes: new FormControl(null),
    });
  }

  // tslint:disable-next-line: typedef
  onsubmit() {
    // console.log(this.myReactiveform.value);
    // console.log('data');
    const data = this.myReactiveform.value;
    this.list.push(data);
  }
}
