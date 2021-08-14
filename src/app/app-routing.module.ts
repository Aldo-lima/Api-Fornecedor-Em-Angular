import { FornecedorCreateComponent } from './components/views/Fornecedor/fornecedor-create/fornecedor-create.component';

import { FornecedorReadComponent } from './components/views/Fornecedor/fornecedor-read/fornecedor-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
