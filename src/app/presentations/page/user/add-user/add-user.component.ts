import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {

  formUser!: FormGroup;

  ngOnInit(): void {
    this.formUser = new FormGroup({
      pseudo: new FormControl("", [Validators.required, Validators.minLength(4)]),
      password: new FormControl("", Validators.required),
      confirmpassword: new FormControl("", Validators.required)


    })
  }
    save() {
      console.log(this.formUser.value)
    }
  }



