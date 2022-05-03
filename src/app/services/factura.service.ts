import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http';

import { Factura } from '../models/factura'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  API_URI = 'http://localhost:4000/api'

  constructor(private http: HttpClient) { }

  getFacturas(){
    return this.http.get(`${this.API_URI}/facturas`);
  }

  getFactura(id:string){
    return this.http.get(`${this.API_URI}/facturas/${id}`);
  }

  deleteFactura(id:string){
    return this.http.delete(`${this.API_URI}/facturas/${id}`)
  }

  saveFactura(factura:Factura){
    return this.http.post(`${this.API_URI}/facturas`,factura);
  }

  updateFactura(id: string|number, updatedFactura: Factura): Observable<Factura>{
    return this.http.put(`${this.API_URI}/facturas/${id}`,updatedFactura)
  }
}