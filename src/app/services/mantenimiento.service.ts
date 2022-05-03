import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http';

import { Mantenimiento } from '../models/mantenimiento'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  API_URI = 'http://localhost:4000/api'

  constructor(private http: HttpClient) { }

  getMantenimientos(){
    return this.http.get(`${this.API_URI}/mantenimientos`);
  }

  getMantenimiento(id:string){
    return this.http.get(`${this.API_URI}/mantenimientos/${id}`);
  }

  deleteMantenimietno(id:string){
    return this.http.delete(`${this.API_URI}/mantenimientos/${id}`)
  }

  saveMantenimiento(mantenimiento:Mantenimiento){
    return this.http.post(`${this.API_URI}/mantenimientos`,mantenimiento);
  }

  updateMantenimiento(id: string|number, updatedMantenimiento: Mantenimiento): Observable<Mantenimiento>{
    return this.http.put(`${this.API_URI}/mantenimientos/${id}`,updatedMantenimiento)
  }
}