import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorCamposPlantillaComponent } from './directivas/error-campos/componente/error-campos-plantilla.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TrackByPipe } from './pipe/track-by.pipe';

@NgModule({
  declarations: [
    ErrorCamposPlantillaComponent,
    TrackByPipe
  ],
  imports: [ReactiveFormsModule, FormsModule],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule    
  ]
})
export class SharedModule { }
