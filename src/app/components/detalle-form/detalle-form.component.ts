import { Component, OnInit, HostBinding } from '@angular/core';
import { Detalle } from '../../models/detalle'
import { ActivatedRoute, Router } from '@angular/router';

import { DetalleService } from '../../services/detalle.services'

@Component({
  selector: 'app-detalle-form',
  templateUrl: './detalle-form.component.html',
  styleUrls: ['./detalle-form.component.css']
})
export class DetalleFormComponent implements OnInit {

  @HostBinding('class') classes = 'row;'

  detalle: Detalle = {
    placa_carro: '',
    numero_factura: '',
    precio: '',
    cantidad: '',
    precio_total: ''
  }

  edit: boolean = false
  constructor(private detalleService: DetalleService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRouter.snapshot.params;
    if (params.id) {
      this.detalleService.getDetalle(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.detalle = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewDetalle() {
    delete this.detalle.cod_detalle;
    delete this.detalle.precio;
    delete this.detalle.precio_total;
    this.detalleService.saveDetalle(this.detalle).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/detalles'])
      },
    )
    err => console.error(err)
  }

  updateDetalle() {
    this.detalleService.updateDetalle(this.detalle.cod_detalle, this.detalle)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/detalles'])
        },
        err => console.log(err)
      )
  }

}
