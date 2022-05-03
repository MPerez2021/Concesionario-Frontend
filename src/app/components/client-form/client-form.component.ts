import { Component, OnInit, HostBinding } from '@angular/core';
import { Cliente } from '../../models/client';
import { ActivatedRoute,Router } from '@angular/router';

import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  @HostBinding('class') classes = 'row;'
  
  cliente: Cliente ={
    nombres: '',
    apellidos: '',
    cedula: '',
    genero: '',
    email: '',
    telefono: '',
    direccion: ''    
  };

  edit: boolean = false;
  constructor(private clientService: ClientsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.clientService.getClient(params.id)
      .subscribe(
        res =>{
          console.log(res);
          this.cliente = res;
          this.edit = true;
        },
          err => console.error(err)
      )
    }
  }

  saveNewClient(){
    
    this.clientService.saveClient(this.cliente).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/clients'])
      },
      err => console.error(err)
    ) 
  }

  saveNewClient2(){
    
    this.clientService.saveClient(this.cliente).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/clients/add'])
      },
      err => console.error(err)
    ) 
  }
 

  updateClient(){
    this.clientService.updateClient(this.cliente.cedula, this.cliente)
    .subscribe(
      res => {
        console.log(res);  
        this.router.navigate(['/clients'])     
      },
        err => console.log(err)
    )
  }

}