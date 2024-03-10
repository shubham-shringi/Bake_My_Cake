import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CakeCartComponent } from './cake-cart/cake-cart.component';
import { CanDeactivateGuard } from './services/can-deactivate.guard';
import { LoginComponent } from './login/login.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CakeRequestsComponent } from './cake-requests/cake-requests.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'order-view/:id',
    component: CakeCartComponent,
    canDeactivate: [CanDeactivateGuard],
  },

  {
    path: 'cake-requests',
    component: CakeRequestsComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent,
    
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
