import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.css']
})
export class ProductAllComponent implements OnInit {

  displayedColumns: string[] =["id", "name", "price"]

   id_forn: String = '';
   product: Product[] = [];


  constructor( private service: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_forn = this.route.snapshot.paramMap.get('id_forn')!;
    this.findAll();
  }

findAll(): void {
  this.service.findAllByFornecedor(this.id_forn).subscribe((resposta)=>{
    this.product = resposta;
  //  console.log(this.product);
  })
}

navegarParaCriarProdct():void {
  this.router.navigate([`fornecedor/${this.id_forn}/produtos/create`])
                    
}

}
