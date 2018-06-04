import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core"
import {RouterModule, Routes} from '@angular/router';
import { CadastrosComponent } from './cadastros.component';

import { SharedModule } from '../shared/shared.module';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';

/* IMPORT DE MODULOS INTERNOS - INICIO */

import { ClienteComponent } from './cliente/cliente.component';
import { ConglomeradoComponent } from './conglomerado/conglomerado.component';
import { ProdutoComponent } from './produto/produto.component';
import { ContratoComponent } from './contrato/contrato.component';
import { NaturezaOperacaoComponent } from './natureza-operacao/natureza-operacao.component';
import { CodigoRetornoComponent } from './codigo-retorno/codigo-retorno.component';
import { ModelosCartaComponent } from './modelos-carta/modelos-carta.component';
import { CodRetornoRemessaComponent } from './cod-retorno-remessa/cod-retorno-remessa.component';
import { MotivosBaixaComponent } from './motivos-baixa/motivos-baixa.component';

/* IMPORT DE MODULOS INTERNOS - FIM */

/* IMPORT DE SERVCES DO MODULO - INICIO */

import {MotivosBaixaService} from './motivos-baixa/motivos-baixa.service';
import {CodigoRetornoService} from './codigo-retorno/codigo-retorno.service';
import {NaturezaOperacaoService} from './natureza-operacao/natureza-operacao.service';
import {CodRetornoRemessaService} from './cod-retorno-remessa/cod-retorno-remessa.service';

/* IMPORT DE SERVCES DO MODULO - FIM */

export const ROUTES: Routes = [
  {path:'', component: CadastrosComponent,
    children: [
      // {
      //   path: 'cliente',
      //   component: ClienteComponent,
      //   data: {
      //     link:'cadastros/cliente',
      //     icon:'fas fa-plus-circle',
      //     title: 'Cliente'
      //   },
      //   children:[]
      // },
      // {
      //   path: 'conglomerado',
      //   component: ConglomeradoComponent,
      //   data: {
      //     link:'cadastros/conglomerado',
      //     icon:'fas fa-plus-circle',
      //     title: 'Conglomerado'
      //   },
      //   children:[]
      // },
      // {
      //   path: 'produto',
      //   component: ProdutoComponent,
      //   data: {
      //     link:'cadastros/produto',
      //     icon:'fas fa-plus-circle',
      //     title: 'Produto'
      //   },
      //   children:[]
      // },
      // {
      //   path: 'contrato',
      //   component: ContratoComponent,
      //   data: {
      //     link:'cadastros/contrato',
      //     icon:'fas fa-plus-circle',
      //     title: 'Contrato'
      //   },
      //   children:[]
      // },
      {
        path: 'naturezaOperacao',
        component: NaturezaOperacaoComponent,
        data: {
          link:'cadastros/naturezaOperacao',
          icon:'fas fa-plus-circle',
          title: 'Natureza da Operação',
          show: false
        },
        children:[]
      },
      {
        path: 'codigoRetorno',
        component: CodigoRetornoComponent,
        data: {
          link:'cadastros/codigoRetorno',
          icon:'fas fa-plus-circle',
          title: 'Código de Retorno',
          show: false
        },
        children:[]
      },
      // {
      //   path: 'modelosCarta',
      //   component: ModelosCartaComponent,
      //   data: {
      //     link:'cadastros/modelosCarta',
      //     icon:'fas fa-plus-circle',
      //     title: 'Modelos de Carta'
      //   },
      //   children:[]
      // },
      {
        path: 'retornoRemessa',
        component: CodRetornoRemessaComponent,
        data: {
          link:'cadastros/retornoRemessa',
          icon:'fas fa-plus-circle',
          title: 'Retorno Remessa Informacional',
          show: false
        },
        children:[]
      },
      {
        path: 'motivosBaixa',
        component: MotivosBaixaComponent,
        data: {
          link:'cadastros/motivosBaixa',
          icon:'fas fa-plus-circle',
          title: 'Motivos de Baixa',
          show: false
        },
        children:[]
      }
    ]
  }
]

export const ARRAY_CHILDREN_CAD = ROUTES[0].children;

@NgModule({
  declarations:[
    CadastrosComponent,
    ClienteComponent,
    ConglomeradoComponent,
    ContratoComponent,
    ProdutoComponent,
    NaturezaOperacaoComponent,
    CodigoRetornoComponent,
    ModelosCartaComponent,
    CodRetornoRemessaComponent,
    MotivosBaixaComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  providers:[
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    MotivosBaixaService,
    CodigoRetornoService,
    NaturezaOperacaoService,
    CodRetornoRemessaService
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CadastrosModule{
}
