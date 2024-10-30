import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent  implements OnInit {

  studentForm!: FormGroup

  ngOnInit() {
    this.studentForm = new FormGroup({
      birthday: new FormControl("", Validators.required),
      first_name: new FormControl("", Validators.required),
      last_name: new FormControl("", Validators.required),
      phone_number: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required),
      matricule: new FormControl("", Validators.required),
      phoneNumberFather: new FormControl("", Validators.required)
    })

   // isInvalidateInput(input: AbstractControl){
    //  return  input.invalid && (input.touched|| input.dirty);
 // }
  }
}
