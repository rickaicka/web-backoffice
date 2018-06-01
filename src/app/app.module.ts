import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import {ROUTES} from './app.routes';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RestricaoComponent } from './restricao/restricao.component';
import { RestChildComponent } from './restricao/rest-child/rest-child.component';
import { RestChild2Component } from './restricao/rest-child2/rest-child2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BreadcrumbComponent,
    SidebarComponent,
    RestricaoComponent,
    RestChildComponent,
    RestChild2Component
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
