import { EmpresaService } from './../service/empresa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  cnpj!: string;
  nomeFantasia!: string;
  cep!: string;

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
  }


    onSubmit(): void {
      const empresaData = {
        cnpj: this.cnpj,
        nomeFantasia: this.nomeFantasia,
        cep: this.cep
      };

    this.empresaService.criarEmpresa(empresaData).subscribe(
      (res: any) => {
        console.log('Empresa criada com sucesso!', res);
      },
      (err: any) => {
        console.log('Erro ao criar empresa!', err);
      }
    );
  }
}
