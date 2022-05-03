import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FacturaService } from './services/factura.service'
import { FacturaListComponent } from './components/factura-list/factura-list.component';
import { FacturaFormComponent } from './components/factura-form/factura-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { CarroFormComponent } from './components/carro-form/carro-form.component';
import { CarroListComponent } from './components/carro-list/carro-list.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';
import { PagoListComponent } from './components/pago-list/pago-list.component';
import { PagoFormComponent } from './components/pago-form/pago-form.component';
import { SucursalListComponent } from './components/sucursal-list/sucursal-list.component';
import { SucursalFormComponent } from './components/sucursal-form/sucursal-form.component';
import { ProveedorListComponent } from './components/proveedor-list/proveedor-list.component';
import { ProveedorFormComponent } from './components/proveedor-form/proveedor-form.component';
import { MantenimientoListComponent } from './components/mantenimiento-list/mantenimiento-list.component';
import { MantenimientoFormComponent } from './components/mantenimiento-form/mantenimiento-form.component';
import { PedidoListComponent } from './components/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';
import { DetalleListComponent } from './components/detalle-list/detalle-list.component';
import { DetalleFormComponent } from './components/detalle-form/detalle-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FacturaListComponent,
    FacturaFormComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    ClientFormComponent,
    ClientListComponent,
    CarroFormComponent,
    CarroListComponent,
    EmpleadoListComponent,
    EmpleadoFormComponent,
    PagoListComponent,
    PagoFormComponent,
    SucursalListComponent,
    SucursalFormComponent,
    ProveedorListComponent,
    ProveedorFormComponent,
    MantenimientoListComponent,
    MantenimientoFormComponent,
    PedidoListComponent,
    PedidoFormComponent,
    DetalleListComponent,
    DetalleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FacturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
