import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //authURL = 'http://localhost:8080/auth/';  //LOCAL
  authURL = ' https://backaar-1.herokuapp.com/auth'; //REMOTO
  constructor (private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario:NuevoUsuario):Observable <any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo',nuevoUsuario);
  
  }

  public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL+'login',loginUsuario);
  }
}
