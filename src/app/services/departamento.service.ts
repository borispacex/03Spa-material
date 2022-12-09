import { Observable } from 'rxjs';
import { endPoint } from './../global';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  
  // http://borisvargas-001-site1.atempurl.com/api/departamento/
  private apiURL = endPoint + 'departamento/'

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<any[]> {
    // GET http://borisvargas-001-site1.atempurl.com/api/departamento/lista
    return this.http.get<any[]>(this.apiURL + 'lista');
  }
}
