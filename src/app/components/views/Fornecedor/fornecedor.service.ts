import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fornecedor } from './fornecedor.modelo';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }
  findAll():Observable<Fornecedor[]>{
    const url =  `${this.baseUrl}/fornecedores`
    return this.http.get<Fornecedor[]>(url);
  }

  findById(id: String): Observable<Fornecedor> {
    const url =`${this.baseUrl}/fornecedores/${id}`
    return this.http.get<Fornecedor>(url);
  }

  create(fornecedor: Fornecedor): Observable<Fornecedor>{
    const url =`${this.baseUrl}/fornecedores`
    return  this.http.post<Fornecedor>(url, fornecedor);
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/fornecedores/${id}`
    return this.http.delete<void>(url)
  }

  update(fornecedor: Fornecedor):Observable<void>{
    const url = `${this.baseUrl}/fornecedores/${fornecedor.id}`
    return this.http.put<void>(url, fornecedor)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`,'ok',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
 
}
