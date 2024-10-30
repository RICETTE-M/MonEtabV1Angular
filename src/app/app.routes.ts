import { Routes } from '@angular/router';
import {SidebarComponent} from './presentations/layout/sidebar/sidebar.component';
import {HomeComponent} from './presentations/pages/home/home.component';
import {ListStudentComponent} from './presentations/pages/student/list-student/list-student.component';
import {ListTeacherComponent} from './presentations/pages/teacher/list-teacher/list-teacher.component';
import {ListUserComponent} from './presentations/pages/user/list-user/list-user.component';
import {RapportComponent} from './presentations/pages/rapport/rapport.component';
import {AddUserComponent} from './presentations/pages/user/add-user/add-user.component';
import {AuthComponent} from './presentations/pages/auth/auth.component';
import {StudentComponent} from './presentations/pages/student/add-student/student.component';
import {TeacherComponent} from './presentations/pages/teacher/add-Teacher/teacher.component';
import {UpdateStudentComponent} from './presentations/pages/student/update-student/update-student.component';
import {UpdateTeacherComponent} from './presentations/pages/teacher/update-teacher/update-teacher.component';

export const routes: Routes = [
  { path : "login" , component : AuthComponent},
  { path : "base" , component : SidebarComponent,children : [
      { path : "home" , component : HomeComponent},
      { path : "list-student" , component : ListStudentComponent},
      { path : "list-teacher" , component : ListTeacherComponent},
      { path : "list-user" , component : ListUserComponent},
      { path : "rapport" , component : RapportComponent},
      { path : "add-student" , component : StudentComponent},
      { path : "add-teacher" , component : TeacherComponent},
      { path : "add-user" , component : AddUserComponent},
      { path : "update-student" , component : UpdateStudentComponent},
      { path : "update-teacher" , component : UpdateTeacherComponent},
      //{ path : "update-user" , component : UpdateUserComponent},
    ]},
  { path : "" , redirectTo : "/login", pathMatch : "full"}
];
