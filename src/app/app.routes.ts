import { Routes } from '@angular/router';
import {SidebarComponent} from './presentations/components/layout/sidebar/sidebar.component';
import {ListStudentComponent} from './presentations/page/student/list-student/list-student.component';
import {ListTeacherComponent} from './presentations/page/teacher/list-teacher/list-teacher.component';
import {ListUserComponent} from './presentations/page/user/list-user/list-user.component';
import {AddUserComponent} from './presentations/page/user/add-user/add-user.component';
import {StudentComponent} from './presentations/page/student/add-student/student.component';
import {TeacherComponent} from './presentations/page/teacher/add-Teacher/teacher.component';
import {UpdateStudentComponent} from './presentations/page/student/update-student/update-student.component';
import {UpdateTeacherComponent} from './presentations/page/teacher/update-teacher/update-teacher.component';
import {AuthComponent} from './presentations/page/auth/auth.component';
import {HomeComponent} from './presentations/page/home/home.component';
import {RapportComponent} from './presentations/page/rapport/rapport.component';

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
