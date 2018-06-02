import {NgModule} from "@angular/core"
import {RouterModule, Routes} from '@angular/router';
import {RemessasComponent} from './remessas.component';
import {ConsultarHistoricoRemessaComponent} from './consultar-historico-remessa/consultar-historico-remessa.component'
import {CommonModule} from "@angular/common";

const ROUTES: Routes = [
  {path:'', component:RemessasComponent,
    children: [
      {
        path: 'historicoRemessa',
        component: ConsultarHistoricoRemessaComponent,
        data: {
          link:'remessas/historicoRemessa',
          icon:'fas fa-newspaper',
          title: 'Consultar Histórico de Remessa'
        }
      }
    ]
  }
]


export const ARRAY_CHILDREN_REM = ROUTES[0].children;

@NgModule({
  declarations:[
    RemessasComponent,
    ConsultarHistoricoRemessaComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ]
})
export class RemessasModule{}
