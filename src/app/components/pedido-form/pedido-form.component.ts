import { Component, OnInit, HostBinding } from '@angular/core';
import { Pedido } from '../../models/pedido'
import { ActivatedRoute, Router } from '@angular/router';

import { PedidoService } from '../../services/pedido.service'

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row;'

  pedido: Pedido = {
    nombre_sucursal: '',
    nombre_prov: '',
    vehiculo: '',
    valor_total: ''
  }

  edit: boolean = false
  constructor(private pedidoService: PedidoService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRouter.snapshot.params;
    if (params.id) {
      this.pedidoService.getPedido(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.pedido = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewPedido() {
    delete this.pedido.num_pedido;
    this.pedidoService.savePedido(this.pedido).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/pedidos'])
      },
    )
    err => console.error(err)
  }

  updatePedido() {
    this.pedidoService.updatePedido(this.pedido.num_pedido, this.pedido)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/pedidos'])
        },
        err => console.log(err)
      )
  }

}
