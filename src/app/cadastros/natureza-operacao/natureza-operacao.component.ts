import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {NaturezaOperacaoModel} from './natureza-operacao.model';
import {NaturezaOperacaoService} from './natureza-operacao.service';
import 'rxjs/add/operator/finally';
import {MyErrorStateMatcher} from '../../shared/error-matcher-input/error-matcher-input.model'

import Swal from 'sweetalert2'

@Component({
  selector: 'app-natureza-operacao',
  templateUrl: './natureza-operacao.component.html',
  styleUrls: ['./natureza-operacao.component.scss']
})
export class NaturezaOperacaoComponent implements OnInit {

  constructor(private naturezaOperacaoService: NaturezaOperacaoService, private formBuilder: FormBuilder) { }

  naturezasOperacao: NaturezaOperacaoModel[] = [];
  modelNaturezaOperacao: NaturezaOperacaoModel;
  naturezaOperacaoForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  codNatOpControl = new FormControl('', [ Validators.required]);
  descNatOpControl = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.naturezaOperacaoForm = this.formBuilder.group({
      codNatOp: this.codNatOpControl,
      descNatOp: this.descNatOpControl
    });
  }

  getNaturezaOperacaoDesc(){
    this.naturezaOperacaoService.getNaturezaOperacaoDesc()
        .subscribe(
          naturezasOperacao => {
            this.naturezasOperacao = naturezasOperacao
          },
          errors => {
            Swal(errors.data.message, "", "error")
          }
        )
  }

  inserirNaturezaOperacao(model){
    this.naturezaOperacaoService.inserirNaturezaOperacao(model)
        .subscribe(
          naturezasOperacao => {
            this.naturezasOperacao.unshift(model);
            this.naturezasOperacao = [...this.naturezasOperacao]
            this.modelNaturezaOperacao = new NaturezaOperacaoModel();
            Swal("Natureza da Operação incluída com sucesso!", "", "success");
          },
          errors => {
            Swal(errors.data.message, "", "error")
          }
        )
  }

}
