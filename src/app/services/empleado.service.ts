import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http';

import { Empleado } from '../models/empleado'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  API_URI = 'http://localhost:4000/api'

  constructor(private http: HttpClient) { }

  getEmpleados(){
    return this.http.get(`${this.API_URI}/empleados`);
  }

  getEmpleado(id:string){
    return this.http.get(`${this.API_URI}/empleados/${id}`);
  }

  deleteEmpleado(id:string){
    return this.http.delete(`${this.API_URI}/empleados/${id}`)
  }

  saveEmpleado(empleado:Empleado){
    return this.http.post(`${this.API_URI}/empleados`,empleado);
  }

  updateEmpleado(id: string|number, updatedEmpleado: Empleado): Observable<Empleado>{
    return this.http.put(`${this.API_URI}/empleados/${id}`,updatedEmpleado)
  }
}