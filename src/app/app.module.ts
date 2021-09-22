
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http';                        

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './components/views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { FornecedorReadComponent } from './components/views/Fornecedor/fornecedor-read/fornecedor-read.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FornecedorCreateComponent } from './components/views/Fornecedor/fornecedor-create/fornecedor-create.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FornecedorDeleteComponent } from './components/views/Fornecedor/fornecedor-delete/fornecedor-delete.component';
import { FornecedorUpdateComponent } from './components/views/Fornecedor/fornecedor-update/fornecedor-update.component';
import { ProductAllComponent } from './components/views/produto/product-all/product-all.component';
import { ProductCreateComponent } from './components/views/produto/product-create/product-create.component';
import { FornecedorDetalheComponent } from './components/views/Fornecedor/fornecedor-detalhe/fornecedor-detalhe.component';
import { ContatoReadComponent } from './components/views/contato/contato-read/contato-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    FornecedorReadComponent,
    FornecedorCreateComponent,
    FornecedorDeleteComponent,
    FornecedorUpdateComponent,
    ProductAllComponent,
    ProductCreateComponent,
    FornecedorDetalheComponent,
    ContatoReadComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
