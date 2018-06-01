import {NgModule} from "@angular/core"
import {RouterModule, Routes} from '@angular/router';
import {ServicosComponent} from './servicos.component';

const ROUTES: Routes = [
  {path:'', component:ServicosComponent}
]

@NgModule({
  declarations:[
    ServicosComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
  ]
})
export class ServicosModule{}
