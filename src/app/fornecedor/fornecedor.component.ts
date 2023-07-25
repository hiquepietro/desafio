export interface Fornecedor {
  cnpjCpf: string;
  nome: string;
  cep: string;
  email: string;
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss']
})


export class FornecedorComponent {

  fornecedor: Fornecedor = {
    cnpjCpf: '',
    nome: '',
    email: '',
    cep: ''
  };
  onSubmit() {
    console.log(this.fornecedor);

  }
}
