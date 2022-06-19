import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../app-routing.module';


@Injectable({
  providedIn: 'root',
})
export class MfeRouteService {
  public mfePath?: string;
  constructor(private router: Router) {}

  setMfePath(path: string) {
    this.mfePath = path;

    console.log('setting route path', this.mfePath)
    console.log(routes)
    routes[0].path = this.mfePath
    this.router.resetConfig([...routes])
    this.router.navigateByUrl(location.pathname + location.search, { skipLocationChange: true });
  }
}
