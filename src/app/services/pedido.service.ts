import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http';

import { Pedido } from '../models/pedido'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  API_URI = 'http://localhost:4000/api'

  constructor(private http: HttpClient) { }

  getPedidos(){
    return this.http.get(`${this.API_URI}/pedidos`);
  }

  getPedido(id:string){
    return this.http.get(`${this.API_URI}/pedidos/${id}`);
  }

  deletePedido(id:string){
    return this.http.delete(`${this.API_URI}/pedidos/${id}`)
  }

  savePedido(pedido:Pedido){
    return this.http.post(`${this.API_URI}/pedidos`,pedido);
  }

  updatePedido(id: string|number, updatedPedido: Pedido): Observable<Pedido>{
    return this.http.put(`${this.API_URI}/pedidos/${id}`,updatedPedido)
  }
}