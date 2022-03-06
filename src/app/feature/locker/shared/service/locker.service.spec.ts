import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { LockerService } from './locker.service';

describe('LockerService', () => {
  let service: LockerService;
  let httpClientSpy : { get: jasmine.Spy};

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
    service = new LockerService(httpClientSpy as any);
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,Router],
      schemas: [NO_ERRORS_SCHEMA]
    });
    //service = TestBed.inject(LockerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia retornar casilleros ocupados)', (done:DoneFn) => {
    //Mock de datos
    const mockOcupados = [{
      id:1,tipo : 'sencillo', ingreso:'2022-03-01 09:28:58'
     }];
    
    httpClientSpy.get.and.returnValue(of(mockOcupados));
    service.getOcupados()
    .subscribe(result =>{
      expect(result).toEqual(mockOcupados);
      done();
    });

  });

  it('Deberia retornar la parrilla total de casilleros sencillos)', (done:DoneFn) => {
    //Mock de datos
    const mockSencillos = [
      {
        id:1,
        estado:'ocupado',
        placa:'FTH65B',
        nombre:'Juan Vargas',
        telefono:'3041447671',
        ingreso:'2022-03-01 09:28:58'}];
    
    httpClientSpy.get.and.returnValue(of(mockSencillos));
    service.getParrillaCasilleros('sencillos')
    .subscribe(result =>{
      expect(result).toEqual(mockSencillos);
      done();
    });

  });

  it('Deberia retornar la parrilla total de casilleros dobles)', (done:DoneFn) => {
    //Mock de datos
    const mockSencillos = [
      {
        id:1,
        estado:'ocupado',
        placa:'FTH65B',
        nombre:'Juan Vargas',
        telefono:'3041447671',
        ingreso:'2022-03-01 09:28:58'}];
    
    httpClientSpy.get.and.returnValue(of(mockSencillos));
    service.getParrillaCasilleros('dobles')
    .subscribe(result =>{
      expect(result).toEqual(mockSencillos);
      done();
    });

  });


});
