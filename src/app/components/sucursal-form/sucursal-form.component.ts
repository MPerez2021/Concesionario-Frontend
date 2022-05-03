import { Component, OnInit,HostBinding } from '@angular/core';
import { Sucursal } from '../../models/sucursal'
import { ActivatedRoute, Router } from '@angular/router';

import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-sucursal-form',
  templateUrl: './sucursal-form.component.html',
  styleUrls: ['./sucursal-form.component.css']
})
export class SucursalFormComponent implements OnInit {

  @HostBinding('class') classes = 'row;'

  sucursal: Sucursal = {
    nombre: '',
    telefono: '',
    direccion: ''
  }
  edit: boolean = false;
  constructor(private sucursalService: SucursalService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRouter.snapshot.params;
    if (params.id) {
      this.sucursalService.getSucursal(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.sucursal = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewSucursal() {

    this.sucursalService.saveSucursal(this.sucursal).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/sucursales'])
      },
    )
    err => console.error(err)
  }

  updateSucursal() {
    this.sucursalService.updateSucursal(this.sucursal.nombre, this.sucursal)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/sucursales'])
        },
        err => console.log(err)
      )
  }

}

