import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilterLockerByTypePipe } from '@locker/shared/pipes/filter-locker-by-type.pipe';
import { SaveComponent } from './save.component';
import { MatDialog } from '@angular/material/dialog';

describe('SaveComponent', () => {
  let component: SaveComponent;
  let fixture: ComponentFixture<SaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ SaveComponent,FilterLockerByTypePipe ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: {} }
    ]
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
    const casillero = {
      id:1,
      estado:'libre',
      placa:'FTH65B',
      nombre:'Juan Vargas',
      telefono:'3041447671',
      ingreso:'2022-03-01 09:28:58'
    }
    component.typeLocker = [{
      id:1,
      tipo:'sencillo',
      valorHora:1000,
      cantidad:50
    }];
    expect(component.onCollect(casillero,'sencillo')).toBeFalse()
  });
  
  it('Debe Cargar data inicial', () => {
    component.ngOnInit()
    expect(component.typeLocker).toBeUndefined();
    expect(component.sencillos).toBeUndefined();
    expect(component.dobles).toBeUndefined();
  });


});
