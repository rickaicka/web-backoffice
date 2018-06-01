import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component'
import { RestricaoComponent } from './restricao/restricao.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent, data: { title: 'Home', icon: 'fas fa-home' } },
  {path: 'one', component: RestricaoComponent, data: { title: 'Restrição', icon: 'fas fa-ban' } }
]
