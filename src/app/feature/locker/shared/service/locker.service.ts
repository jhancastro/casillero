import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItipoCasilleros,Iocupados, Icasilleros }  from './../model/index';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LockerService {

  constructor(
    protected http: HttpClient
  ) { }

  getCasilleros(): Observable<ItipoCasilleros[]> {
    return this.http.get<ItipoCasilleros[]>(
    ` ${environment.endpoint}/tipoCasilleros`
    );
  }

  getOcupados(): Observable<Iocupados[]> {
    return this.http.get<Iocupados[]>(
    ` ${environment.endpoint}/ocupados`
    );
  }

getParrillaCasilleros(tipo: string): Observable<Icasilleros[]> {
  return this.http.get<Icasilleros[]>(
  ` ${environment.endpoint}/${tipo}`
  );
}

patchlockers(input: Icasilleros, tipo: string): Observable<Icasilleros>{
  return this.http.patch<Icasilleros>(
    `${environment.endpoint}/${tipo}/${input.id}`,
      input
  );
}
  
}
