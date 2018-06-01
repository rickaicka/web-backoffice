import { Component, OnInit, Input } from '@angular/core';
import { Route, Routes, Router , NavigationStart, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'
import {ROUTES} from '../app.routes';
import { map, filter, scan } from 'rxjs/operators';

import _ from 'underscore';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {

  @Input() route: Route;

  arr: Routes = ROUTES;
  constructor(private location: Location, private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationStart)).subscribe((routeAct: ActivatedRoute) => {
        let rt: any;
        let url: any;
        url = routeAct.url;
        routeAct.url = url.replace("/",'');
        rt = _.find(this.arr, {path: routeAct.url})
        this.route = rt;
    });
  }

}
