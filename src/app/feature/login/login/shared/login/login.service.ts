import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILogin, IRegisterResponse } from '../models/login.model';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}

  public login(input: IRegisterResponse | ILogin ): Promise<IRegisterResponse | ILogin> {
    return new Promise(resolve => {
      this.loginUser(input).subscribe(data => {
        resolve(data);
      });
    });
  }

  loginUser(input: ILogin) {
    return this.http.get<ILogin>(
      `${environment.endpoint}/login?email=${input.email}&password=${input.password}`
    );
  }

}
