import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {API_ROUTE} from '../../app.api';

import {MotivosBaixaModel} from './motivos-baixa.model'

@Injectable()
export class MotivosBaixaService{
  constructor(private http: HttpClient){}

  getMotivosBaixaDesc(){
    return this.http.get<MotivosBaixaModel[]>(`${API_ROUTE}/motivosBaixa/todosDecrescente`);
  }

  inserirMotivoBaixa(model){
    return this.http.post<MotivosBaixaModel>(`${API_ROUTE}/motivosBaixa/`, model);
  }

}
