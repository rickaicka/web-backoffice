import { Component, OnInit } from '@angular/core';
import {BreadcrumbService} from 'ng5-breadcrumb';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
  }

}
