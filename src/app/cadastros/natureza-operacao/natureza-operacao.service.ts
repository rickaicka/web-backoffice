import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {API_ROUTE} from '../../app.api';

import {NaturezaOperacaoModel} from './natureza-operacao.model'

@Injectable()
export class NaturezaOperacaoService {

  constructor(private http: HttpClient){}

  getNaturezaOperacaoDesc(){
    return this.http.get<NaturezaOperacaoModel[]>(`${API_ROUTE}/naturezasOperacao/todosDecrescente`);
  }

  inserirNaturezaOperacao(model){
    return this.http.post<NaturezaOperacaoModel>(`${API_ROUTE}/naturezasOperacao/`, model);
  }
}
