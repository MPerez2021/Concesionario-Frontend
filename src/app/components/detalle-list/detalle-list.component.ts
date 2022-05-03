import { Component, OnInit } from '@angular/core';
import { DetalleService } from '../../services/detalle.services';

@Component({
  selector: 'app-detalle-list',
  templateUrl: './detalle-list.component.html',
  styleUrls: ['./detalle-list.component.css']
})
export class DetalleListComponent implements OnInit {

  detalles: any = [];

  constructor(private detalleService: DetalleService) { }

  ngOnInit() {
    this.getDetalles();
  }

  getDetalles(){
    this.detalleService.getDetalles().subscribe(
      res => {
        this.detalles = res;
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

