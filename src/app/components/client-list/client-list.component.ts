import { Component, OnInit } from '@angular/core';

import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: any = [];

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
   this.getClients();
  }

  getClients(){
    this.clientsService.getClients().subscribe(
      res => {
        this.clients = res;
      },
      err => console.log(err)
    );
  }

  /* deleteClient(id: string) {
    this.clientsService.deleteClient(id).subscribe(
      res => {
        console.log(res);
        this.getClients();
      },

      err => console.log(err)
    )
  }*/

}
