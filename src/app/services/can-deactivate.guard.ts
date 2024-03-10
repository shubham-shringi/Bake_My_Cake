import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CakeCartComponent } from '../cake-cart/cake-cart.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CanDeactivateGuard implements CanDeactivate<CakeCartComponent> {
  canDeactivate(
    component: CakeCartComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return component.canDeactivate ? component.canDeactivate() : true;
  }
  
}
