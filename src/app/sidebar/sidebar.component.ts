import { Component, OnInit, Input, Output } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes, Route } from '@angular/router';

import {MenuModel} from './menu.model';
import {ROUTES} from '../app.routes';

import {SubMenuModel} from './submenu.model';
import {ARRAY_CHILDREN_CAD} from '../cadastros/cadastros.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  @Input() showMenu: boolean;
  @Input() routeChild: Route

  @Input() route: Route;
  showChildren: boolean;
  routeChildren: Route;

  arr: Routes = ROUTES;
  arrChildren: any[] = [];

  parentRoute: {
    icon:null,
    name:null,
    parent: string
  }

  constructor() {
 }

  ngOnInit() {
  }

  setClickedRoute(route: Route){
    this.route = route;
    this.showSubMenu(this.route);
  }

  showSubMenu(route: Route){
    this.showChildren = true;
    this.parentRoute = {
      icon: this.route.data.icon,
      name: this.route.data.title,
      parent: this.route.path
    };
    var path = this.route.path;
    switch (path){
      case 'cadastros':
        this.arrChildren = ARRAY_CHILDREN_CAD;
        this.route.children = this.arrChildren
        break;
      case 'servicos':
        this.arrChildren = ARRAY_CHILDREN_CAD;
        this.route.children = this.arrChildren
        break;
      case 'configuracoes':
        this.arrChildren = ARRAY_CHILDREN_CAD;
        this.route.children = this.arrChildren
        break;
      case 'remessas':
        this.arrChildren = ARRAY_CHILDREN_CAD;
        this.route.children = this.arrChildren
        break;
      default :
        this.arrChildren = ARRAY_CHILDREN_CAD;
        this.route.children = this.arrChildren
        break;
    }
  }
}
