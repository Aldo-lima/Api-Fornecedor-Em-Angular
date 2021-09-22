import { FornecedorService } from './../fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.modelo';
import { Route, Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-fornecedor-detalhe',
  templateUrl: './fornecedor-detalhe.component.html',
  styleUrls: ['./fornecedor-detalhe.component.css']
})
export class FornecedorDetalheComponent implements OnInit {
  


  constructor(private service : FornecedorService,
  private router: Router,
  private route: ActivatedRoute) { }

  fornecedor: Fornecedor = {
    id: '',
    nome: '',
    cnpj: '',
    insc_esta: '',
    product: [],
    
  }

   
 
  ngOnInit(): void {
    this.fornecedor.id = this.route.snapshot.paramMap.get('id')!
   this.findById();
    
  
}

findById(): void {
  this.service.findById(this.fornecedor.id!).subscribe((resposta)=> {
    console.log(resposta)
   // this.fornecedor = resposta
    
  });

}
}
