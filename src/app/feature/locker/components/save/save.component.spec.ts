import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterLockerByTypePipe } from '@locker/shared/pipes/filter-locker-by-type.pipe';
import { SaveComponent } from './save.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Icasilleros } from '@locker/shared/model';
import { of } from 'rxjs';

describe('SaveComponent', () => {
  let component: SaveComponent;
  let fixture: ComponentFixture<SaveComponent>;
  let dialogSpy : jasmine.SpyObj<MatDialog>;


  beforeEach(async () => {
      dialogSpy = jasmine.createSpyObj<MatDialog>('MatDialog',['open']);

    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ SaveComponent,FilterLockerByTypePipe ],
      providers: [
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

  it('Debe abrir ventana para cobro', () => {
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
    expect(component.filterLocker.length).toBe(1);
    expect(dialogSpy.open).toHaveBeenCalled();
  });
  
  it('Debe Cargar data inicial', () => {
    component.ngOnInit()
    expect(component.typeLocker).toBeUndefined();
    expect(component.sencillos).toBeUndefined();
    expect(component.dobles).toBeUndefined();
  });


});
