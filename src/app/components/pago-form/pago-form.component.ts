import { Component, OnInit, HostBinding } from '@angular/core';
import { Pago } from '../../models/pago'
import { ActivatedRoute, Router } from '@angular/router';

import { PagoService } from '../../services/pago.service'

@Component({
  selector: 'app-pago-form',
  templateUrl: './pago-form.component.html',
  styleUrls: ['./pago-form.component.css']
})
export class PagoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row;'
  pago: Pago = {
    tipo: '',
    tiempo_pago: ''
  }
  edit: boolean = false;
  constructor(private pagoService: PagoService, private router: Router, private acitavedRouter: ActivatedRoute) { }


  ngOnInit() {
    const params = this.acitavedRouter.snapshot.params;
    if (params.id) {
      this.pagoService.getPago(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.pago = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewPago() {

    this.pagoService.savePago(this.pago).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/pagos'])
      },
    )
    err => console.error(err)
  }

  updatePago() {
    this.pagoService.updatePago(this.pago.tipo, this.pago)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/pagos'])
        },
        err => console.log(err)
      )
  }

}
  


