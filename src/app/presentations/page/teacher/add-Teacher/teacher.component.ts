import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit{

  teacherForm!: FormGroup;

  ngOnInit(): void {
    this.teacherForm= new FormGroup({
      birthday: new FormControl("", Validators.required),
      first_name: new FormControl("", Validators.required),
      last_name: new FormControl("", Validators.required),
      phone_number: new FormControl("", Validators.required),
    })
  }

  save() {
    console.log(this.teacherForm.value)
  }
}
