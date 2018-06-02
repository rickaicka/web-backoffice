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
  {path:'remessas', loadChildren: './remessas/remessas.module#RemessasModule',
    data: {
      title: 'Remessas',
      icon: 'fas fa-newspaper'
    }
  }
]
