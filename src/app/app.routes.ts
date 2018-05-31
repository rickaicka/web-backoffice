import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component'
import { RestricaoComponent } from './restricao/restricao.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'one', component: RestricaoComponent}
]
