import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent,
    data: {
      title: 'Home',
      icon: 'fas fa-home'
    }
  },
  {path:'servicos', loadChildren: './servicos/servicos.module#ServicosModule',
    data: {
      title: 'Serviços',
      icon: 'fas fa-glasses'
    }
  },
  {path:'cadastros', loadChildren: './cadastros/cadastros.module#CadastrosModule',
    data: {
      title: 'Cadastros',
      icon: 'fas fa-plus-circle'
    }
  },
  {path:'configuracoes', loadChildren: './configuracoes/configuracoes.module#ConfiguracoesModule',
    data: {
      title: 'Configurações',
      icon: 'fas fa-cogs'
    }
  },
  {path:'remessas', loadChildren: './configuracoes/configuracoes.module#ConfiguracoesModule',
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
