import { ActivatedRoute, Router } from '@angular/router';
import { FornecedorService } from './../fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.modelo';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent implements OnInit {

  constructor(private service: FornecedorService, private route: ActivatedRoute, private router: Router ) { }

fornecedor:  Fornecedor ={
  id: '',
  nome: '',
  cnpj: '',
  insc_esta: '',
  product : [],
}

  ngOnInit(): void {
   this.fornecedor.id = this.route.snapshot.paramMap.get('id')!
   this.findById();
  }

  findById(): void {
    this.service.findById(this.fornecedor.id!).subscribe((resposta)=> {
    console.log(resposta)
    this.fornecedor = resposta
      
    })
   
  }

  update(): void {
    this.service.update(this.fornecedor).subscribe((resposta)=>{
    this.router.navigate(['fornecedor']);
    this.service.mensagem('fornecedor atualizado com sucesso');
    })
  }

  cancel(): void {
    this.router.navigate(['fornecedor'])
  }

}
