import { Component, OnInit, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes, Route } from '@angular/router';

import {MenuModel} from './menu.model';
import {ROUTES} from '../app.routes';

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
  arrChildren: Routes;

  parentRoute: {
    icon:null,
    name:null,
    parent: string
  }


  constructor() { }

  ngOnInit() {
  }

  setClickedRoute(route: Route){
    this.route = route;
    if(this.route.children){
      this.showSubMenu(this.route);
    }else{
      this.showChildren = false;
    }
  }

  showSubMenu(route: Route){
    this.showChildren = true;
    this.parentRoute = {
      icon: this.route.data.icon,
      name: this.route.data.title,
      parent: this.route.path
    };
    this.arrChildren = route.children;
  }
}
