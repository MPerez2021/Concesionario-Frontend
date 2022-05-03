import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http';

import { Cliente } from '../models/client'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  API_URI = 'http://localhost:4000/api'

  constructor(private http: HttpClient) { }

  getClients(){
    return this.http.get(`${this.API_URI}/clientes`);
  }

  getClient(id:string){
    return this.http.get(`${this.API_URI}/clientes/${id}`);
  }

  deleteClient(id:string){
    return this.http.delete(`${this.API_URI}/clientes/${id}`)
  }

  saveClient(client:Cliente){
    return this.http.post(`${this.API_URI}/clientes`,client);
  }  
  
  updateClient(id: string|number, updatedClient: Cliente): Observable<Cliente>{
    return this.http.put(`${this.API_URI}/clientes/${id}`,updatedClient)
  }
}
