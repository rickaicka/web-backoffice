import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {API_ROUTE} from '../../app.api';
import {CodRetornoRemessaModel} from './cod-retorno-remessa.model';

@Injectable()
export class CodRetornoRemessaService {

  constructor(private http: HttpClient){}

  getRetornoRemessaDesc(){
    return this.http.get<CodRetornoRemessaModel[]>(`${API_ROUTE}/dominio/codigoInformacional`);
  }

  inserirRetornoRemessa(model){
    return this.http.post<CodRetornoRemessaModel>(`${API_ROUTE}/dominio/codigoInformacional`, model);
  }
}
