import { Product } from './../produto/product.model';
import { ContentChildDecorator } from "@angular/core";
import { CombineLatestOperator } from "rxjs/internal/observable/combineLatest";
import { Contato } from '../contato/contato-read/contato.modelo';


export interface Fornecedor{
   id?: String;
   nome: String;
   cnpj: String;
   insc_esta: String;
   product: Product []; 
}