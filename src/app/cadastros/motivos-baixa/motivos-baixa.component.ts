import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {MotivosBaixaModel} from './motivos-baixa.model';
import {MotivosBaixaService} from './motivos-baixa.service';
import 'rxjs/add/operator/finally';
import {MyErrorStateMatcher} from '../../shared/error-matcher-input/error-matcher-input.model'

import Swal from 'sweetalert2'

@Component({
  selector: 'app-motivos-baixa',
  templateUrl: './motivos-baixa.component.html',
  styleUrls: ['./motivos-baixa.component.scss']
})
export class MotivosBaixaComponent implements OnInit {
  constructor(private motivosBaixaService: MotivosBaixaService, private formBuilder: FormBuilder) { }
  motivosBaixa: MotivosBaixaModel[] = [];
  modelMotivosBaixa: MotivosBaixaModel;
  motivosBaixaForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  codMotivoBaixaControl = new FormControl('', [ Validators.required]);
  descMotivoBaixaControl = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.motivosBaixaForm = this.formBuilder.group({
      codMotivoBaixa: this.codMotivoBaixaControl,
      descMotivoBaixa: this.descMotivoBaixaControl
    });
  }

  getMotivosBaixaDesc(){
    this.motivosBaixaService.getMotivosBaixaDesc()
        .subscribe(
          motivosBaixa => {
            this.motivosBaixa = motivosBaixa
          },
          errors => {
            Swal(errors.data.message, "", "error")
          }
        )
  }

  inserirMotivoBaixa(model){
    this.motivosBaixaService.inserirMotivoBaixa(model)
        .subscribe(
          motivosBaixa => {
            this.motivosBaixa.unshift(model);
            this.motivosBaixa = [...this.motivosBaixa]
            this.modelMotivosBaixa = new MotivosBaixaModel();
            Swal("Motivo de Baixa incluído com sucesso!", "", "success");
          },
          errors => {
            Swal(errors.data.message, "", "error")
          }
        )
  }
}
