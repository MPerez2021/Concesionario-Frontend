import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../services/proveedor.service'

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {

  proveedores: any = [];

  constructor(private proveedorService: ProveedorService) { }

  ngOnInit() {
    this.getProveedores();
  }

  getProveedores(){
    this.proveedorService.getProveedores().subscribe(
      res => {
        this.proveedores = res;
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
