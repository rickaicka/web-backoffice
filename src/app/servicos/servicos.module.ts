import {NgModule} from "@angular/core"
import {RouterModule, Routes} from '@angular/router';
import {ServicosComponent} from './servicos.component';
import {Ng5BreadcrumbModule, BreadcrumbService} from 'ng5-breadcrumb';

import {SuspenderComponent} from './oficio-judicial/suspender/suspender.component'
import { ReincluirComponent } from './oficio-judicial/reincluir/reincluir.component';
import {OficioJudicialComponent} from './oficio-judicial/oficio-judicial.component';

const ROUTES: Routes = [
  {path:'', component:ServicosComponent,
    children: [
      {
        path: 'oficioJudicial',
        component: OficioJudicialComponent,
        data: {
          link:'servicos/oficioJudicial',
          icon:'fas fa-glasses',
          title: 'Ofício Judicial'
        },
        children:[
          {
            path: 'suspensaoJudicial',
            component: SuspenderComponent,
            data: {
              link:'servicos/oficioJudicial/suspensaoJudicial',
              icon:'servicos/oficioJudicial',
              title: 'Suspensão Judicial'
            }
          }
        ]
      }
    ]
  }
]

export const ARRAY_CHILDREN_SER = ROUTES[0].children;

@NgModule({
  declarations:[
    ServicosComponent,
    OficioJudicialComponent,
    SuspenderComponent,
    ReincluirComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    Ng5BreadcrumbModule
  ],
  providers: [
    BreadcrumbService
  ]
})
export class ServicosModule{}
