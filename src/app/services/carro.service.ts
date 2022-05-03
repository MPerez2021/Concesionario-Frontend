import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http';

import { Carro } from '../models/carro'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  API_URI = 'http://localhost:4000/api'

  constructor(private http: HttpClient) { }

  getCarros(){
    return this.http.get(`${this.API_URI}/carros`);
  }

  getCarro(id:string){
    return this.http.get(`${this.API_URI}/carros/${id}`);
  }

  deleteCarro(id:string){
    return this.http.delete(`${this.API_URI}/carros/${id}`)
  }

  saveCarro(carro:Carro){
    return this.http.post(`${this.API_URI}/carros`,carro);
  }

  updateCarro(id: string|number, updatedCarro: Carro): Observable<Carro>{
    return this.http.put(`${this.API_URI}/carros/${id}`,updatedCarro)
  }
}