import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MfeRouteService } from './services/mfe-route.service';
import { MfeStateResolverService } from './services/mfe-state-resolver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnChanges {
  title = 'pdp';
  @Input('path') path = '';
  @Input() mfeState: any = {};
  constructor(private router: Router, private mfeRoute: MfeRouteService, private mfeStateService: MfeStateResolverService) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['path'].currentValue) {
      console.log(this.path);
      this.mfeRoute.setMfePath(this.path);
    }
    if(changes['mfeState']?.currentValue) {
      this.mfeStateService.setState(this.mfeState)
    }
  }
}
