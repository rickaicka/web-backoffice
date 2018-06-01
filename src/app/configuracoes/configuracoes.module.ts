import {NgModule} from "@angular/core"
import {RouterModule, Routes} from '@angular/router';
import { ConfiguracoesComponent } from './configuracoes.component';

const ROUTES: Routes = [
  {path:'', component:ConfiguracoesComponent}
]

@NgModule({
  declarations:[
    ConfiguracoesComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
  ]
})
export class ConfiguracoesModule{}
