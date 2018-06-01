import {NgModule} from "@angular/core"
import {RouterModule, Routes} from '@angular/router';
import {RemessasComponent} from './remessas.component';

const ROUTES: Routes = [
  {path:'', component:RemessasComponent}
]

@NgModule({
  declarations:[
    RemessasComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
  ]
})
export class RemessasModule{}
