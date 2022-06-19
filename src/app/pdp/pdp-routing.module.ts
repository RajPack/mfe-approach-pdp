import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdpContainerComponent } from './components/pdp-container/pdp-container.component';
import { PdpPage1Component } from './components/pdp-page1/pdp-page1.component';
import { PdpPage2Component } from './components/pdp-page2/pdp-page2.component';
import { PdpPage3Component } from './components/pdp-page3/pdp-page3.component';

export const routes: Routes = [
  {path: '', component: PdpContainerComponent, children: [
    {path: 'page1', component: PdpPage1Component},
    {path: 'page2', component: PdpPage2Component},
    {path: 'page3', component: PdpPage3Component},
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdpRoutingModule { }
