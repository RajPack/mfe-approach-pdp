import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdpRoutingModule } from './pdp-routing.module';
import { PdpPage1Component } from './components/pdp-page1/pdp-page1.component';
import { PdpPage2Component } from './components/pdp-page2/pdp-page2.component';
import { PdpPage3Component } from './components/pdp-page3/pdp-page3.component';
import { PdpContainerComponent } from './components/pdp-container/pdp-container.component';


@NgModule({
  declarations: [
    PdpPage1Component,
    PdpPage2Component,
    PdpPage3Component,
    PdpContainerComponent
  ],
  imports: [
    CommonModule,
    PdpRoutingModule
  ]
})
export class PdpModule { 
 

}


