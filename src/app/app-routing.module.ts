import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { FacturaListComponent } from './components/factura-list/factura-list.component'
import { FacturaFormComponent } from './components/factura-form/factura-form.component'
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { CarroListComponent } from './components/carro-list/carro-list.component';
import { CarroFormComponent } from './components/carro-form/carro-form.component';
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
import { DetalleFormComponent } from './components/detalle-form/detalle-form.component';
import { DetalleListComponent } from './components/detalle-list/detalle-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/add', component: ClientFormComponent },
  { path: 'clients/edit/:id', component: ClientFormComponent },

  { path: 'cars', component: CarroListComponent },
  { path: 'cars/add', component: CarroFormComponent },
  { path: 'cars/edit/:id', component: CarroFormComponent },

  { path: 'facturas', component: FacturaListComponent },
  { path: 'facturas/add', component: FacturaFormComponent },
  { path: 'facturas/edit/:id', component: FacturaFormComponent },

  { path: 'empleados', component: EmpleadoListComponent },
  { path: 'empleados/add', component: EmpleadoFormComponent },
  { path: 'empleados/edit/:id', component: EmpleadoFormComponent },

  { path: 'pagos', component: PagoListComponent },
  { path: 'pagos/add', component: PagoFormComponent },
  { path: 'pagos/edit/:id', component: PagoFormComponent },

  { path: 'sucursales', component: SucursalListComponent },
  { path: 'sucursales/add', component: SucursalFormComponent },
  { path: 'sucursales/edit/:id', component: SucursalFormComponent },

  { path: 'proveedores', component: ProveedorListComponent },
  { path: 'proveedores/add', component: ProveedorFormComponent },
  { path: 'proveedores/edit/:id', component: ProveedorFormComponent },

  { path: 'mantenimientos', component: MantenimientoListComponent },
  { path: 'mantenimientos/add', component: MantenimientoFormComponent },
  { path: 'mantenimientos/edit/:id', component: MantenimientoFormComponent },

  { path: 'pedidos', component: PedidoListComponent },
  { path: 'pedidos/add', component: PedidoFormComponent },
  { path: 'pedidos/edit/:id', component: PedidoFormComponent },

  { path: 'detalles', component: DetalleListComponent },
  { path: 'detalles/add', component: DetalleFormComponent },
  { path: 'detalles/edit/:id', component: DetalleFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
