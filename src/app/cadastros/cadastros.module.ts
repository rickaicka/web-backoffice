import {NgModule} from "@angular/core"
import {RouterModule, Routes} from '@angular/router';
import { CadastrosComponent } from './cadastros.component';

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

const ROUTES: Routes = [
  {path:'', component: CadastrosComponent,
    children: [
      {
        path: 'cliente',
        component: ClienteComponent,
        data: {
          link:'cadastros/cliente',
          icon:'fas fa-plus-circle',
          title: 'Cliente'
        }
      },
      {
        path: 'conglomerado',
        component: ConglomeradoComponent,
        data: {
          link:'cadastros/conglomerado',
          icon:'fas fa-plus-circle',
          title: 'Conglomerado'
        }
      },
      {
        path: 'produto',
        component: ProdutoComponent,
        data: {
          link:'cadastros/conglomerado',
          icon:'fas fa-plus-circle',
          title: 'Produto'
        }
      },
      {
        path: 'contrato',
        component: ContratoComponent,
        data: {
          link:'cadastros/contrato',
          icon:'fas fa-plus-circle',
          title: 'Contrato'
        }
      },
      {
        path: 'naturezaOperacao',
        component: NaturezaOperacaoComponent,
        data: {
          link:'cadastros/natureza-operacao',
          icon:'fas fa-plus-circle',
          title: 'Natureza da Operação'
        }
      },
      {
        path: 'codigoRetorno',
        component: CodigoRetornoComponent,
        data: {
          link:'cadastros/codigo-retorno',
          icon:'fas fa-plus-circle',
          title: 'Código de Retorno'
        }
      },
      {
        path: 'modelosCarta',
        component: ModelosCartaComponent,
        data: {
          link:'cadastros/modelos-carta',
          icon:'fas fa-plus-circle',
          title: 'Modelos de Carta'
        }
      },
      {
        path: 'codRetornoRemessa',
        component: CodRetornoRemessaComponent,
        data: {
          link:'cadastros/retorno-remessa',
          icon:'fas fa-plus-circle',
          title: 'Código Retorno Remessa Informacional'
        }
      },
      {
        path: 'motivosBaixa',
        component: MotivosBaixaComponent,
        data: {
          link:'cadastros/motivos-baixa',
          icon:'fas fa-plus-circle',
          title: 'Motivos de Baixa'
        }
      }
    ]
  }
]

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
  ],
  exports:[
    ROUTES
  ]
})
export class CadastrosModule{}
