import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterLockerByTypePipe } from '@locker/shared/pipes/filter-locker-by-type.pipe';
import { SaveComponent } from './save.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Icasilleros } from '@locker/shared/model';
import { of } from 'rxjs';
import { LockerService } from '@locker/shared/service/locker.service';

describe('SaveComponent', () => {
  let component: SaveComponent;
  let fixture: ComponentFixture<SaveComponent>;
  let dialogSpy : jasmine.SpyObj<MatDialog>;


  beforeEach(async () => {
      dialogSpy = jasmine.createSpyObj<MatDialog>('MatDialog',['open']);

    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ SaveComponent,FilterLockerByTypePipe ],
      providers: [LockerService,
                { provide: MatDialog, useValue: dialogSpy }
    ],
    schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe validar Tipos de casilleros', () => {
    component.ngOnInit()
    expect(component.typeLocker).toBeUndefined();
  });

  
  it('Debe validar inicio de datos indefinidos para casilleros sencillos', () => {
    component.ngOnInit()
    expect(component.sencillos).toBeUndefined();
  });

  it('Debe validar inicio de datos indefinidos para casilleros dobles', () => {
    component.ngOnInit()
    expect(component.dobles).toBeUndefined();
  });

  it('Debe abrir ventana para cobro para tipo sencillo', () => {
    const casillero : Icasilleros = {
      id:1,
      estado:'ocupado',
      placa:'FTH65B',
      nombre:'Juan Vargas',
      telefono:'3041447671',
      ingreso:'2022-03-01 09:28:58',
      valorHora:1000
    }
    component.typeLocker = [{
      id:1,
      tipo:'sencillo',
      valorHora:1000,
      cantidad:50
    }];
    const dialogRef = {afterClosed: () => of(true) } as MatDialogRef<unknown>;
    dialogSpy.open.and.returnValue(dialogRef);
    component.onCollect(casillero,'sencillo');
    expect(dialogSpy.open).toHaveBeenCalled();
  });

  it('Debe abrir ventana para cobro para tipo doble', () => {
    const casillero : Icasilleros = {
      id:1,
      estado:'ocupado',
      placa:'FTH65B',
      nombre:'Juan Vargas',
      telefono:'3041447671',
      ingreso:'2022-03-01 09:28:58',
      valorHora:1500
    }
    component.typeLocker = [{
      id:1,
      tipo:'doble',
      valorHora:1500,
      cantidad:25
    }];
    const dialogRef = {afterClosed: () => of(true) } as MatDialogRef<unknown>;
    dialogSpy.open.and.returnValue(dialogRef);
    component.onCollect(casillero,'doble');
    expect(component.filterLocker.length).toBe(1);
    
  });

  it('Debe Cargar data inicial mock del servicio LockerService getCasilleros', () => {
    spyOn(component.lockerService,'getCasilleros').and.callFake(()=>of(
      [{id:1,tipo:'sencillo',valorHora:1000,cantidad:50},
      {id:2,tipo:'doble',valorHora:1500,cantidad:25}]
      
   ));
   component.onchargueData();
   expect(component.typeLocker.length).toBe(2);
  });

  it('Debe Cargar data inicial mock del servicio LockerService getParrillaCasilleros - sencillos', () => {
    spyOn(component.lockerService,'getParrillaCasilleros').and.callFake(()=>of(
      [
        { id:1,
          estado:'ocupado',
          placa:'FTH65B',
          nombre:'Juan Vargas',
          telefono:'3041447671',
          ingreso:'2022-03-01 09:28:58'}
    ]
      
   ));
   component.onchargueData();
   expect(component.sencillos.length).toBe(1);
  });

  it('Debe Cargar data inicial mock del servicio LockerService getParrillaCasilleros - dobles', () => {
    spyOn(component.lockerService,'getParrillaCasilleros').and.callFake(()=>of(
      [
        { id:1,
          estado:'ocupado',
          placa:'FTH65B',
          nombre:'Juan Vargas',
          telefono:'3041447671',
          ingreso:'2022-03-01 09:28:58'}
    ]
      
   ));
   component.onchargueData();
   expect(component.dobles.length).toBe(1);
  });


  
  it('Debe Cargar data inicial', () => {
    component.ngOnInit()
    expect(component.typeLocker).toBeUndefined();
    expect(component.sencillos).toBeUndefined();
    expect(component.dobles).toBeUndefined();
  });

  it('Debe abrir ventana para asignar casillero tipo sencillo', () => {
    const casillero : Icasilleros = {
      id:1,
      estado:'libre',
      placa:'',
      nombre:'',
      telefono:'',
      ingreso:'',
      valorHora:1000
    }
    component.typeLocker = [{
      id:1,
      tipo:'sencillo',
      valorHora:1000,
      cantidad:50
    }];
    const dialogRef = {afterClosed: () => of(true) } as MatDialogRef<unknown>;
    dialogSpy.open.and.returnValue(dialogRef);
    component.onCollect(casillero,'sencillo');
    expect(dialogSpy.open).toHaveBeenCalled();
  });

  it('Debe abrir ventana para asignar casillero tipo doble', () => {
    const casillero : Icasilleros = {
      id:1,
      estado:'libre',
      placa:'',
      nombre:'',
      telefono:'',
      ingreso:'',
      valorHora:1500
    }
    component.typeLocker = [{
      id:1,
      tipo:'doble',
      valorHora:1500,
      cantidad:25
    }];
    const dialogRef = {afterClosed: () => of(true) } as MatDialogRef<unknown>;
    dialogSpy.open.and.returnValue(dialogRef);
    component.onCollect(casillero,'doble');
    expect(component.filterLocker.length).toBe(1);
    
  });


});
