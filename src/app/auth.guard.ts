import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {ShortlinkService} from "./shortlink.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private shortlinkService: ShortlinkService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const loggedIn = this.shortlinkService.isLoggedIn();
    if(!loggedIn)
      this.router.navigateByUrl('/login');
    return loggedIn;
  }
}
