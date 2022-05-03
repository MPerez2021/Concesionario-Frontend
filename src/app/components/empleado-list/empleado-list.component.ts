import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service'

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  empleados: any =[];

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.getEmpleados();
  }
  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe(
      res =>{
        this.empleados = res;
      },
      err => console.log(err)
    );
  }
   /* deleteFactura(id: string) {
    this.empleadoService.deleteEmpleado(id).subscribe(
      res => {
        console.log(res);
        this.getEmpleados();
      },
      err => console.log(err)
    )
  }*/

}
