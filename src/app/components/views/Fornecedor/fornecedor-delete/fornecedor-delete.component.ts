import { FornecedorService } from './../fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../fornecedor.modelo';

@Component({
  selector: 'app-fornecedor-delete',
  templateUrl: './fornecedor-delete.component.html',
  styleUrls: ['./fornecedor-delete.component.css']
})
export class FornecedorDeleteComponent implements OnInit {

  fornecedor: Fornecedor = {
    id: '',
    nome: '',
    cnpj: '',
    insc_esta: '',
    product: [],
  }
 
  constructor(private service: FornecedorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   this.fornecedor.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }
     findById(): void {
      this.service.findById(this.fornecedor.id!).subscribe((resposta)=>{
        this.fornecedor =resposta
        console.log(this.fornecedor)
      })
     }

     delete(): void {
       this.service.delete(this.fornecedor.id!).subscribe((resposta)=> {
         this.router.navigate(['fornecedor'])
         this.service.mensagem('Categoria deletada com sucesso!')
       })
     }
}
