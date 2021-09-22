import { FornecedorDetalheComponent } from './components/views/Fornecedor/fornecedor-detalhe/fornecedor-detalhe.component';
import { FornecedorUpdateComponent } from './components/views/Fornecedor/fornecedor-update/fornecedor-update.component';
import { FornecedorDeleteComponent } from './components/views/Fornecedor/fornecedor-delete/fornecedor-delete.component';
import { FornecedorCreateComponent } from './components/views/Fornecedor/fornecedor-create/fornecedor-create.component';

import { FornecedorReadComponent } from './components/views/Fornecedor/fornecedor-read/fornecedor-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAllComponent } from './components/views/produto/product-all/product-all.component';
import { ProductCreateComponent } from './components/views/produto/product-create/product-create.component';

const routes: Routes = [
 {
  path: '',
  component: HomeComponent
 },
 {
  path: 'fornecedor',
  component: FornecedorReadComponent
 },
 {
  path: 'fornecedor/create',
  component: FornecedorCreateComponent
 },
 {
  path: 'fornecedor/delete/:id',
  component: FornecedorDeleteComponent
 },
 {
  path: 'fornecedor/update/:id',
  component: FornecedorUpdateComponent
 },

 {
  path: 'fornecedor/:id_forn/product',
  component: ProductAllComponent
 },
 {
  path: 'fornecedor/:id_forn/produtos/create',
  component: ProductCreateComponent
 },
 {
  path: 'fornecedor/ver/:id',
  component: FornecedorDetalheComponent
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
