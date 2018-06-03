import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatTableModule} from '@angular/material/table'


/* SERVIÇOS APP - INICIO  */
import {MotivosBaixaService} from '../cadastros/motivos-baixa/motivos-baixa.service';
import {CodigoRetornoService} from '../cadastros/codigo-retorno/codigo-retorno.service';

/* SERVIÇOS APP - FIM  */


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    NgxDatatableModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    NgxDatatableModule
  ]
})
export class SharedModule{
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [
        MotivosBaixaService,
        CodigoRetornoService
      ]
    }
  }
}
