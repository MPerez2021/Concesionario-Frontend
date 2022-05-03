import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../services/pago.service'

@Component({
  selector: 'app-pago-list',
  templateUrl: './pago-list.component.html',
  styleUrls: ['./pago-list.component.css']
})
export class PagoListComponent implements OnInit {

  pagos: any= [];

  constructor(private pagoService: PagoService) { }

  ngOnInit() {
    this.getPagos();
  }

  getPagos(){
    this.pagoService.getPagos().subscribe(
      res => {
        this.pagos = res;
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