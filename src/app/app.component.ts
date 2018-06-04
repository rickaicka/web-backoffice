import { Component } from '@angular/core';
import {BreadcrumbService} from 'ng5-breadcrumb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  constructor(private breadcrumbService: BreadcrumbService){
    breadcrumbService.addFriendlyNameForRoute('/', 'Home');

    breadcrumbService.addFriendlyNameForRoute('/servicos', 'Serviços');
    breadcrumbService.addFriendlyNameForRoute('/servicos/oficioJudicial', 'Ofício Judicial');
    breadcrumbService.addFriendlyNameForRoute('/servicos/oficioJudicial/suspensaoJudicial', 'Suspensão Judicial');

    breadcrumbService.addFriendlyNameForRoute('/cadastros', 'Cadastros');
    breadcrumbService.addFriendlyNameForRoute('/cadastros/cliente', 'Cliente');
    breadcrumbService.addFriendlyNameForRoute('/cadastros/conglomerado', 'Conglomerado');
    breadcrumbService.addFriendlyNameForRoute('/cadastros/produto', 'Produto');
    breadcrumbService.addFriendlyNameForRoute('/cadastros/contrato', 'Contrato');
    breadcrumbService.addFriendlyNameForRoute('/cadastros/naturezaOperacao', 'Natureza da Operação');
    breadcrumbService.addFriendlyNameForRoute('/cadastros/codigoRetorno', 'Código de Retorno');
    breadcrumbService.addFriendlyNameForRoute('/cadastros/modelosCarta', 'Modelos de Carta');
    breadcrumbService.addFriendlyNameForRoute('/cadastros/retornoRemessa', 'Retorno de Remessa Informacional');
    breadcrumbService.addFriendlyNameForRoute('/cadastros/motivosBaixa', 'Motivos de Baixa');
  }
}
