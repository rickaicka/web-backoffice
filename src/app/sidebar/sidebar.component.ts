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
  route: Route;

  arr: Routes = ROUTES;



  constructor() { }

  ngOnInit() {
  }

  setClickedRoute(route: Route){
    this.route = route;
  }
}
