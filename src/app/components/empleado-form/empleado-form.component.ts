import { Component, OnInit, HostBinding } from '@angular/core';
import { Empleado } from '../../models/empleado'
import { ActivatedRoute, Router } from '@angular/router';

import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row;'

  empleado: Empleado = {
    nombres: '',
    apellidos: '',
    direccion: '',
    telefono: '',
    email: '',
    cedula: '',
    genero: '',
    fecha_ingreso: '',
    salario: ''
  }
  edit: boolean = false;


  constructor(private empleadoService: EmpleadoService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRouter.snapshot.params;
    if (params.id) {
      this.empleadoService.getEmpleado(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.empleado = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewEmpleado() {

    this.empleadoService.saveEmpleado(this.empleado).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/empleados'])
      },
      err => console.log(err)
    )
  }

  updateEmpleado() {
    this.empleadoService.updateEmpleado(this.empleado.cedula, this.empleado)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/empleados'])
        },
        err => console.log(err)
      )
  }

}
