import { FornecedorService } from './../fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.modelo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent implements OnInit {

   fornecedor: Fornecedor[] = []

  displayedColumns: string[] = ['id', 'nome', 'cnpj','insc_esta', 'verFornecedor', 'product' ,'acoes'];
  constructor(private service : FornecedorService, private router: Router) { }

  ngOnInit(): void {
     
      this.findAll();
    
  }

  findAll(){
    this.service.findAll().subscribe(resposta =>{
     
      this.fornecedor = resposta; 
    })
  }

  navegarParaFornecedorCreate(){
    this.router.navigate(["fornecedor/create"])
  }
 
}
