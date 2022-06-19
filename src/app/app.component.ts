import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pdp';
  @Input('path') path = '';
  @Input() mfeState: any = {};
  constructor(private router: Router) {}
}
