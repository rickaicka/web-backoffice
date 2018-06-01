import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component'
import { RestricaoComponent } from './restricao/restricao.component';
import { RestChildComponent } from './restricao/rest-child/rest-child.component';
import { RestChild2Component } from './restricao/rest-child2/rest-child2.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent,
    data: {
      title: 'Home',
      icon: 'fas fa-home'
    }
  },
  {path: 'one', component: RestricaoComponent,
    children: [
      {path: 'two',component: RestChildComponent,data: {link:'one/two', icon:'fas fa-ban', title: 'Teste 1'}},
      {path: 'three',component: RestChild2Component,data: {link:'one/three', icon:'fas fa-ban', title: 'Teste 2'}}
    ],
    data: {
      title: 'Restrição',
      icon: 'fas fa-ban'
    }
  }
]
