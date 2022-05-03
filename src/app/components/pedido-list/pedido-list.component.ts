import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service'

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})
export class PedidoListComponent implements OnInit {

  pedidos: any = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.getPedidos();
  }

  getPedidos(){
    this.pedidoService.getPedidos().subscribe(
      res => {
        this.pedidos = res;
      },
      err => console.log(err)
    );
  }

   /* deleteCarro(id: string) {
    this.facturaService.deleteFactura(id).subscribe(
      res => {
        console.log(res);
        this.getFacturas();
      },

      err => console.log(err)
    )
  }*/

}
