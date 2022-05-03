import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from '../../services/mantenimiento.service';

@Component({
  selector: 'app-mantenimiento-list',
  templateUrl: './mantenimiento-list.component.html',
  styleUrls: ['./mantenimiento-list.component.css']
})
export class MantenimientoListComponent implements OnInit {

  mantenimientos: any = [];

  constructor(private mantenimientoService: MantenimientoService) { }

  ngOnInit() {
    this.getMantenimientos();
  }

  getMantenimientos(){
    this.mantenimientoService.getMantenimientos().subscribe(
      res => {
        this.mantenimientos = res;
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
