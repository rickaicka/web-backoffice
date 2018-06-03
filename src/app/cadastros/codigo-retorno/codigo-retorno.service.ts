import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {API_ROUTE} from '../../app.api';

import {CodigoRetornoModel} from './codigo-retorno.model';

@Injectable()
export class CodigoRetornoService{
  constructor(private http: HttpClient){}

  getCodigosRetornoDesc(){
    return this.http.get<CodigoRetornoModel[]>(`${API_ROUTE}/codigosRetorno/todosDecrescente`);
  }

  inserirCodigoRetorno(model){
    return this.http.post<CodigoRetornoModel>(`${API_ROUTE}/codigosRetorno/`, model);
  }

}
