import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../../services/sucursal.service'

@Component({
  selector: 'app-sucursal-list',
  templateUrl: './sucursal-list.component.html',
  styleUrls: ['./sucursal-list.component.css']
})
export class SucursalListComponent implements OnInit {

  sucursales: any = [];

  constructor(private sucursalService: SucursalService) { }

  ngOnInit() {
    this.getSucursales();
  }

  getSucursales(){
    this.sucursalService.getSucursales().subscribe(
      res => {
        this.sucursales = res;
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
