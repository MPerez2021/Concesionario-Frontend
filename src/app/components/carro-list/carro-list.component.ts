import { Component, OnInit } from '@angular/core';

import { CarroService } from '../../services/carro.service';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.css']
})
export class CarroListComponent implements OnInit {

  cars: any = [];

  constructor(private carroService: CarroService) { }

  ngOnInit() {
    this.getCarros();
  }

  getCarros(){
    this.carroService.getCarros().subscribe(
      res => {
        this.cars = res;
      },
      err => console.log(err)
    );
  }

   /* deleteCarroid: string) {
    this.carroService.deleteCarro(id).subscribe(
      res => {
        console.log(res);
        this.getCarros();
      },

      err => console.log(err)
    )
  }*/

}
