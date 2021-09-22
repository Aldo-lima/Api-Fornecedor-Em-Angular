import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

   baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient, private _snack: MatSnackBar ) { }

  findAllByFornecedor(id_forn : String): Observable<Product[]>{
  const  url = `${this.baseUrl}/produtos?fornecedores=${id_forn}`
   return this.http.get<Product[]>(url)
}

create(product: Product, id_fron: String): Observable<Product>{
  const  url = `${this.baseUrl}/produtos?fornecedores=${id_fron}`
  return  this.http.post<Product>(url, product)
}

mensagem(str: String): void {
  this._snack.open(`${str}`,'ok',{
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 3000
  })

}
}