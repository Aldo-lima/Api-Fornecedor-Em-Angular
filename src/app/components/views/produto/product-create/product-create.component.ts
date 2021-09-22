import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  name = new FormControl('', [Validators.minLength(3)])
  id_forn: string =''

  product: Product = {
    id: '',
    name: '',
    price: ''
  }
  constructor( private service: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id_forn = this.route.snapshot.paramMap.get("id_forn")!
    console.log(this.id_forn);
  }
create(): void {
  
  this.service.create(this.product, this.id_forn).subscribe((resposta)=>{
  this.router.navigate([`$fornecedor/${this.id_forn}/produtos`])
  this.service.mensagem('Product criado com sucesso!')
  
  }, err =>{
    this.router.navigate([`$fornecedor/${this.id_forn}/produtos`])
    this.service.mensagem('error ao criar novo livro');
  })
}



  getMenssage() {
    if (this.name.invalid) { 
    return 'Ocampo Titulo deve conter entre 3 a 100 carateres'
    }
    return false;
  }

}
