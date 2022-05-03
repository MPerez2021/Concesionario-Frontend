import { Component, OnInit, HostBinding } from '@angular/core';
import { Factura } from '../../models/factura';
import { ActivatedRoute, Router } from '@angular/router';

import { FacturaService } from '../../services/factura.service'

@Component({
  selector: 'app-factura-form',
  templateUrl: './factura-form.component.html',
  styleUrls: ['./factura-form.component.css']
})
export class FacturaFormComponent implements OnInit {


  @HostBinding('class') classes = 'row;'

  factura: Factura = {
    cedula_cliente: '',
    cedula_empleado: '',
    metodo_pago: '',
    nombre_sucursal: '',
    num_factura: '',
    fecha_emision: '',
    valor_total: '',
  }

  edit: boolean = false;
  constructor(private facturaService: FacturaService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRouter.snapshot.params;
    if (params.id) {
      this.facturaService.getFactura(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.factura = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewFactura() {

    this.facturaService.saveFactura(this.factura).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/facturas'])
      },
    )
    err => console.error(err)
  }

  updateFactura() {
    this.facturaService.updateFactura(this.factura.num_factura, this.factura)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/facturas'])
        },
        err => console.log(err)
      )
  }

}
