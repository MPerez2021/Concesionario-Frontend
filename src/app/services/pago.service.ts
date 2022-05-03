import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http';

import { Pago } from '../models/pago'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  API_URI = 'http://localhost:4000/api'

  constructor(private http: HttpClient) { }

  getPagos(){
    return this.http.get(`${this.API_URI}/pagos`);
  }

  getPago(id:string){
    return this.http.get(`${this.API_URI}/pagos/${id}`);
  }

  deletePago(id:string){
    return this.http.delete(`${this.API_URI}/pagos/${id}`)
  }

  savePago(pago:Pago){
    return this.http.post(`${this.API_URI}/pagos`,pago);
  }

  updatePago(id: string|number, updatedPago: Pago): Observable<Pago>{
    return this.http.put(`${this.API_URI}/pagos/${id}`,updatedPago)
  }
}