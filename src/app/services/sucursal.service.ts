import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http';

import { Sucursal } from '../models/sucursal'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  API_URI = 'http://localhost:4000/api'

  constructor(private http: HttpClient) { }

  getSucursales(){
    return this.http.get(`${this.API_URI}/sucursales`);
  }

  getSucursal(id:string){
    return this.http.get(`${this.API_URI}/sucursales/${id}`);
  }

  deleteSucursal(id:string){
    return this.http.delete(`${this.API_URI}/sucursales/${id}`)
  }

  saveSucursal(sucursal:Sucursal){
    return this.http.post(`${this.API_URI}/sucursales`,sucursal);
  }

  updateSucursal(id: string|number, updatedSucursal: Sucursal): Observable<Sucursal>{
    return this.http.put(`${this.API_URI}/sucursales/${id}`,updatedSucursal)
  }
}