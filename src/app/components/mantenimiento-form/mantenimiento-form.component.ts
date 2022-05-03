import { Component, OnInit, HostBinding } from '@angular/core';
import { Mantenimiento } from '../../models/mantenimiento'
import { ActivatedRoute, Router } from '@angular/router';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';

@Component({
  selector: 'app-mantenimiento-form',
  templateUrl: './mantenimiento-form.component.html',
  styleUrls: ['./mantenimiento-form.component.css']
})
export class MantenimientoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row;'

  mantenimiento: Mantenimiento = {
    cedula_cliente: '',
    cedula_empleado: '',
    descripcion: '',
    subtotal: '',
    iva: '',
    valor_total: ''
  }

  edit: boolean = false;
  constructor(private mantenimientoService: MantenimientoService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRouter.snapshot.params;
    if (params.id) {
      this.mantenimientoService.getMantenimiento(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.mantenimiento = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewMantenimiento() {
    delete this.mantenimiento.cod_mant;
    delete this.mantenimiento.iva;
    delete this.mantenimiento.valor_total;
    this.mantenimientoService.saveMantenimiento(this.mantenimiento).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/mantenimientos'])
      },
    )
    err => console.error(err)
  }

  updateMantenimiento() {
    this.mantenimientoService.updateMantenimiento(this.mantenimiento.cod_mant, this.mantenimiento)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/mantenimientos'])
        },
        err => console.log(err)
      )
  }

}


