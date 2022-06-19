import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MfeStateResolverService
  implements Resolve<Record<string, unknown>>
{
  private state$ = new Subject<Record<string, unknown>>();

  public setState(state: Record<string, unknown>) {
    this.state$.next(state)
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Record<string, unknown>> {
    return this.state$.pipe(take(1));
  }
}
