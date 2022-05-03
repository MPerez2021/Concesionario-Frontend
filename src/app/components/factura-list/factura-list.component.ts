import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../../services/factura.service';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit {

  facturas: any = [];

  constructor(private facturaService: FacturaService) { }

  ngOnInit() {
    this.getFacturas();
  }

  getFacturas(){
    this.facturaService.getFacturas().subscribe(
      res => {
        this.facturas = res;
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

