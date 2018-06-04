import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {CodigoRetornoModel} from './codigo-retorno.model';
import {CodigoRetornoService} from './codigo-retorno.service';
import 'rxjs/add/operator/finally';
import {MyErrorStateMatcher} from '../../shared/error-matcher-input/error-matcher-input.model'

import Swal from 'sweetalert2'

@Component({
  selector: 'app-codigo-retorno',
  templateUrl: './codigo-retorno.component.html',
  styleUrls: ['./codigo-retorno.component.scss']
})
export class CodigoRetornoComponent implements OnInit {

  constructor(private codigoRetornoService: CodigoRetornoService, private formBuilder: FormBuilder) { }
  codigosRetorno: CodigoRetornoModel[] = [];
  modelCodigoRetorno: CodigoRetornoModel;
  codRetornoForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  codRetornoControl = new FormControl('', [ Validators.required]);
  descCodRetornoControl = new FormControl('', [Validators.required]);
  ngOnInit() {
    this.codRetornoForm = this.formBuilder.group({
      codRetorno: this.codRetornoControl,
      descCodRetorno: this.descCodRetornoControl
    });
  }

  getCodigosRetornoDesc(){
    this.codigoRetornoService.getCodigosRetornoDesc()
        .subscribe(
          codigosRetorno => {
            this.codigosRetorno = codigosRetorno
          },
          errors => {
            Swal(errors.data.message, "", "error")
          }
        )
  }

  inserirCodigoRetorno(model){
    this.codigoRetornoService.inserirCodigoRetorno(model)
        .subscribe(
          codigosRetorno => {
            this.codigosRetorno.unshift(model);
            this.codigosRetorno = [...this.codigosRetorno]
            this.modelCodigoRetorno = new CodigoRetornoModel();
            Swal("Código de Retorno incluído com sucesso!", "", "success");
          },
          errors => {
            Swal(errors.data.message, "", "error")
          }
        )
  }

}
