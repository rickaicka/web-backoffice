import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Ng5BreadcrumbModule} from 'ng5-breadcrumb';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import {SharedModule} from './shared/shared.module';

import {ROUTES} from './app.routes';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConsultarComponent } from './servicos/restricao/consultar/consultar.component';
import { IncluirComponent } from './servicos/restricao/incluir/incluir.component';
import { AlterarComponent } from './servicos/restricao/alterar/alterar.component';
import { BaixarComponent } from './servicos/restricao/baixar/baixar.component';
import { ContestacaoComponent } from './servicos/contestacao/contestacao.component';
import { AprovarRejeitarComponent } from './servicos/contestacao/aprovar-rejeitar/aprovar-rejeitar.component';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ConsultarComponent,
    IncluirComponent,
    AlterarComponent,
    BaixarComponent,
    ContestacaoComponent,
    AprovarRejeitarComponent,
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
    TransferirSolicitacaoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    SweetAlert2Module.forRoot(),
    SharedModule.forRoot(),
    Ng5BreadcrumbModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
