import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {CodRetornoRemessaModel} from './cod-retorno-remessa.model';
import {CodRetornoRemessaService} from './cod-retorno-remessa.service';
import 'rxjs/add/operator/finally';
import {MyErrorStateMatcher} from '../../shared/error-matcher-input/error-matcher-input.model'

import Swal from 'sweetalert2'
@Component({
  selector: 'app-cod-retorno-remessa',
  templateUrl: './cod-retorno-remessa.component.html',
  styleUrls: ['./cod-retorno-remessa.component.scss']
})
export class CodRetornoRemessaComponent implements OnInit {

  constructor(private codRetornoRemessaService: CodRetornoRemessaService, private formBuilder: FormBuilder) { }

  codigosRemessa: CodRetornoRemessaModel[] = [];
  modelCodRetornoRemessa: CodRetornoRemessaModel;
  codRetornoRemessaForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  codigoControl = new FormControl('', [ Validators.required]);
  descricaoControl = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.codRetornoRemessaForm = this.formBuilder.group({
      codigo: this.codigoControl,
      descricao: this.descricaoControl
    });
  }

  getRetornoRemessaDesc(){
    this.codRetornoRemessaService.getRetornoRemessaDesc()
        .subscribe(
          codigosRemessa => {
            this.codigosRemessa = codigosRemessa
          },
          errors => {
            Swal(errors.data.message, "", "error")
          }
        )
  }

  inserirRetornoRemessa(model){
    this.codRetornoRemessaService.inserirRetornoRemessa(model)
        .subscribe(
          codigosRemessa => {
            this.codigosRemessa.unshift(model);
            this.codigosRemessa = [...this.codigosRemessa]
            this.modelCodRetornoRemessa = new CodRetornoRemessaModel();
            Swal("Código de Retorno da Remessa incluído com sucesso!", "", "success");
          },
          errors => {
            Swal(errors.data.message, "", "error")
          }
        )
  }

}
