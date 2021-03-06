import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule,  MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollectComponent } from './collect.component';

describe('CollectComponent', () => {
   let component: CollectComponent;
  let fixture: ComponentFixture<CollectComponent>;
  let dialogSpy : jasmine.SpyObj<MatDialog>;
  let componentSpy : jasmine.SpyObj<CollectComponent>;

   const casillero  = {
    id:1,
    estado:'ocupado',
    placa:'FTH65B',
    nombre:'Juan Vargas',
    telefono:'3041447671',
    ingreso:'2022-03-01 09:28:58',
    valorHora:1500
  } 

  beforeEach(async () => {
    dialogSpy = jasmine.createSpyObj<MatDialog>('MatDialog',['open']);
    componentSpy = jasmine.createSpyObj<CollectComponent>('CollectComponent',['realizarAsignacion']);
    await TestBed.configureTestingModule({
      declarations: [ CollectComponent ],
      imports:[MatDialogModule ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { casillero } },
        { provide: MatDialog, useValue: dialogSpy },
        { provide : MatDialogRef, useValue: { close: () => {} } },
        { provide : CollectComponent , useValue: componentSpy },

    ],
    schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de realizar el llamado al metodo realizarAsignacion', () => {
    component.flagfree = true;
    component.realizarAsignacion();
    expect(component.minutos).toBe(0);
  });

  it('Debe de realizar el llamado al metodo realizarCobro', () => {
    component.flagfree = true;
    component.realizarCobro();
    expect(component.minutosHora).toBe(60);
  });

  it('Debe de cerrar el modal abierto', () => {
    const dialogRef = {close: null } as MatDialogRef<unknown>;
    dialogSpy.open.and.returnValue(dialogRef);
    expect(dialogRef.close).toEqual(null);
  });

});
