import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Login} from '../../../domains/interfaces/login';
import {BaseService} from '../../../core/services/base-service/base.service';
import {Router} from '@angular/router';
import {environmentProd} from '../../../../environments/environment.prod';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  /*formLogin!: FormGroup;
  login: Login={
    username: "",
    password: "",
    rememberMe: false
  }
  constructor(private router: Router,private service:BaseService) { }


  home() {
    this.router.navigateByUrl("/base/home");
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required,Validators.minLength(5)])
    });
  }
  isInvalidateInput(input: AbstractControl<any>){
    return input.invalid && (input.touched || input.dirty) ;
  }

  connexion(){
    this.login.username= this.formLogin.value.username;
    this.login.password= this.formLogin.value.password;
    this.service.connexion(environmentProd.endPoint.login, this.login).subscribe({
      next:(response: any) => {
        console.log(response)
      },
        error:(error: any)

    })
  }*/


}
