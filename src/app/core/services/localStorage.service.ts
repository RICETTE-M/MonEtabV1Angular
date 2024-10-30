import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
  })
export class LocalStorageService{
  private authToken: string = 'authToken';
  constructor(){}

  createToken(token: string): void{
  localStorage.setItem(this.authToken, token);
  }

  getToken(): string | null{
    return localStorage.getItem(this.authToken);
    } //recupère la valeur de clé du token

  destroyToken(): void{
    localStorage.removeItem(this.authToken);
    }

  }
