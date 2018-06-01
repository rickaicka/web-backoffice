import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import {ROUTES} from './app.routes';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConsultarComponent } from './servicos/restricao/consultar/consultar.component';
import { IncluirComponent } from './servicos/restricao/incluir/incluir.component';
import { AlterarComponent } from './servicos/restricao/alterar/alterar.component';
import { BaixarComponent } from './servicos/restricao/baixar/baixar.component';
import { ContestacaoComponent } from './servicos/contestacao/contestacao.component';
import { AprovarRejeitarComponent } from './servicos/contestacao/aprovar-rejeitar/aprovar-rejeitar.component';
import { ReincluirComponent } from './servicos/oficio-judicial/reincluir/reincluir.component';
import { SuspenderComponent } from './servicos/oficio-judicial/suspender/suspender.component';

import { ParametrosSistemaComponent } from './configuracoes/parametros-sistema/parametros-sistema.component';
import { ControleAcessoComponent } from './configuracoes/controle-acesso/controle-acesso.component';
import { FuncionalidadeComponent } from './configuracoes/controle-acesso/funcionalidade/funcionalidade.component';
import { AssocPerfilFuncaoComponent } from './configuracoes/controle-acesso/perfil/assoc-perfil-funcao/assoc-perfil-funcao.component';
import { UsuarioComponent } from './configuracoes/controle-acesso/usuario/usuario.component';
import { ReenviarSenhaComponent } from './configuracoes/controle-acesso/usuario/reenviar-senha/reenviar-senha.component';
import { SolicitacaoComponent } from './configuracoes/controle-acesso/solicitacao/solicitacao.component';
import { CadastroUsuarioComponent } from './configuracoes/controle-acesso/solicitacao/cadastro-usuario/cadastro-usuario.component';
import { AlterarUsuarioComponent } from './configuracoes/controle-acesso/solicitacao/alterar-usuario/alterar-usuario.component';
import { AprovarUsuarioComponent } from './configuracoes/controle-acesso/solicitacao/aprovar-usuario/aprovar-usuario.component';
import { TransferirSolicitacaoComponent } from './configuracoes/controle-acesso/solicitacao/transferir-solicitacao/transferir-solicitacao.component';
import { RemessasComponent } from './remessas/remessas.component';
import { ConsultarHistoricoRemessaComponent } from './remessas/consultar-historico-remessa/consultar-historico-remessa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BreadcrumbComponent,
    SidebarComponent,
    ConsultarComponent,
    IncluirComponent,
    AlterarComponent,
    BaixarComponent,
    ContestacaoComponent,
    AprovarRejeitarComponent,
    ReincluirComponent,
    SuspenderComponent,
    ParametrosSistemaComponent,
    ControleAcessoComponent,
    FuncionalidadeComponent,
    AssocPerfilFuncaoComponent,
    UsuarioComponent,
    ReenviarSenhaComponent,
    SolicitacaoComponent,
    CadastroUsuarioComponent,
    AlterarUsuarioComponent,
    AprovarUsuarioComponent,
    TransferirSolicitacaoComponent,
    RemessasComponent,
    ConsultarHistoricoRemessaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
