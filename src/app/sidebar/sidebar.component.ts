import { Component, OnInit, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MenuModel} from './menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  @Input() showMenu: boolean;
  arr: MenuModel[] = [
    new MenuModel('', 'Home', 'fas fa-home'),
    new MenuModel('one', 'Restrição', 'fas fa-ban')
  ];
  constructor() { }

  ngOnInit() {
  }
}
