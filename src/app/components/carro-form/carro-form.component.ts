import { Component, OnInit, HostBinding } from '@angular/core';
import { Carro } from '../../models/carro';
import { ActivatedRoute, Router } from '@angular/router';

import { CarroService } from '../../services/carro.service'

@Component({
  selector: 'app-carro-form',
  templateUrl: './carro-form.component.html',
  styleUrls: ['./carro-form.component.css']
})
export class CarroFormComponent implements OnInit {

  @HostBinding('class') classes = 'row;'

  carro: Carro = {
    descripcion: '',
    marca: '',
    modelo: '',
    precio: '',
    color: '',
    placa: '',
  };

  edit: boolean = false;
  constructor(private carroService: CarroService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRouter.snapshot.params;
    if (params.id){
      this.carroService.getCarro(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.carro = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    } 
  }

  saveNewCarro(){    
    this.carroService.saveCarro(this.carro).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/cars'])
      },
    )
    err => console.error(err)
  }

  updateCarro(){
    this.carroService.updateCarro(this.carro.placa, this.carro)
      .subscribe(
        res =>{
          console.log(res);
          this.router.navigate(['/cars'])
        },
          err => console.log(err)
      )
  }

}
