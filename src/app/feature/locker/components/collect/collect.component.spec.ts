import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule,  MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CollectComponent } from './collect.component';

describe('CollectComponent', () => {
  let component: CollectComponent;
  let fixture: ComponentFixture<CollectComponent>;
  let dialogSpy : jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    dialogSpy = jasmine.createSpyObj<MatDialog>('MatDialog',['open']);
    await TestBed.configureTestingModule({
      declarations: [ CollectComponent ],
      imports:[MatDialogModule ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: dialogSpy },
        {provide:MatDialogRef , useValue:{} },
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

  it('Debe de retornar un valor no valido de cobro', () => {
    
    component.ngOnInit(); 
    expect(component.cobro).toEqual(NaN);
  });


});
