import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    ExplorerComponent,
    HomeComponent,
    QuemsomosComponent,
    ContatoComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
