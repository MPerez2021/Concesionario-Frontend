import { Component, OnInit, HostBinding } from '@angular/core';
import { Proveedor } from '../../models/proveedor'
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-proveedor-form',
  templateUrl: './proveedor-form.component.html',
  styleUrls: ['./proveedor-form.component.css']
})
export class ProveedorFormComponent implements OnInit {

  @HostBinding('class') classes = 'row;'

  proveedor: Proveedor = {
    nombre: '',
    email: '',
    direccion: ''
  }
  
  edit: boolean = false;
  constructor(private proveedorService: ProveedorService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRouter.snapshot.params;
    if (params.id) {
      this.proveedorService.getProveedor(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.proveedor = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewProveedor() {

    this.proveedorService.saveProveedor(this.proveedor).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/proveedores'])
      },
    )
    err => console.error(err)
  }

  updateProveedor() {
    this.proveedorService.updateFProveedor(this.proveedor.nombre, this.proveedor)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/proveedores'])
        },
        err => console.log(err)
      )
  }

}
