import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'explorer', component: ExplorerComponent },
    { path: 'quemsomos', component: QuemsomosComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);