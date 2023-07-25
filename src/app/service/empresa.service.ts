import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  apiUrl = 'http://localhost:4200/empresa';
  empresa: any;

  constructor(private http: HttpClient) { }

 criarEmpresa(empresaData:any): Observable<any>{
    const novaEmpresa = { ...empresaData, id: this.empresa.length + 1 };
    this.empresa.push(novaEmpresa);
    return of(novaEmpresa);
  }
    getEmpresas(): Observable<any[]> {
    return of(this.empresa);
  }
}
