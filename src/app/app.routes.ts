import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ServicosComponent} from './servicos/servicos.component';
import {CadastrosComponent} from './cadastros/cadastros.component';
import {ConfiguracoesComponent} from './configuracoes/configuracoes.component';
import {RemessasComponent} from './remessas/remessas.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent,
    data: {
      title: 'Home',
      icon: 'fas fa-home'
    }
  },
  {path:'servicos', component: ServicosComponent,
    data: {
      title: 'Serviços',
      icon: 'fas fa-glasses'
    }
  },
  {path:'cadastros', component: CadastrosComponent,
    data: {
      title: 'Cadastros',
      icon: 'fas fa-plus-circle'
    }
  },
  {path:'configuracoes', component: ConfiguracoesComponent,
    data: {
      title: 'Configurações',
      icon: 'fas fa-cogs'
    }
  },
  {path:'remessas', component: RemessasComponent,
    data: {
      title: 'Remessas',
      icon: 'fas fa-newspaper'
    }
  }
  // {path: 'one', component: RestricaoComponent,
  //   children: [
  //     {path: 'two',component: RestChildComponent,data: {link:'one/two', icon:'fas fa-ban', title: 'Teste 1'}},
  //     {path: 'three',component: RestChild2Component,data: {link:'one/three', icon:'fas fa-ban', title: 'Teste 2'}}
  //   ],
  //   data: {
  //     title: 'Restrição',
  //     icon: 'fas fa-ban'
  //   }
  // }
]
