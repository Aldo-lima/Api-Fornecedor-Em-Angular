import { FornecedorService } from './../fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.modelo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {
  
  fornecedor: Fornecedor ={
    nome: '',
    cnpj: '',
    insc_esta: '',
    product: []
   }


  constructor(private service: FornecedorService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.fornecedor).subscribe((resposta)=>{
    this.service.mensagem('Categoria criada com sucesso!');
    this.router.navigate(['/fornecedor'])
    })
  }

  cancel(): void {
    this.router.navigate(['/fornecedor'])
  }

}
