import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfeStateResolverService } from './services/mfe-state-resolver.service';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../../../src/app/pdp/pdp.module').then(({ PdpModule }) => PdpModule),
    resolve: {
      state: MfeStateResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
