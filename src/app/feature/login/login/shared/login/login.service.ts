import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}

  public login(input: any): Promise<any> {
    return new Promise(resolve => {
      this.loginUser(input).subscribe(data => {
        resolve(data);
      });
    });
  }

  loginUser(input: any) {
    return this.http.get<any>(
      `${environment.endpoint}/login?email=${input.email}&password=${input.password}`
    );
  }

}
