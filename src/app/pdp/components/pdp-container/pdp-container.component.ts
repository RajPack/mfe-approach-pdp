import {
  Component,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-pdp-container',
  templateUrl: './pdp-container.component.html',
  styleUrls: ['./pdp-container.component.scss'],
})
export class PdpContainerComponent implements OnInit {
  @Input() state?: Record<string, unknown>;
  @ViewChild('pdp') pdpContainer!: ElementRef;
  constructor(private activatedRoute: ActivatedRoute) {
    console.log('pdp container init -- from mfe');
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(
        tap((data) => console.log(data)),
        map(({ state }) => state),
        tap((state) => {
          this.state = state as Record<string, unknown>;
        })
      )
      .subscribe();
  }

  sendTime() {
    this.pdpContainer.nativeElement.dispatchEvent(
      new CustomEvent('pdpStateUpdate', {
        detail: { reviewed: new Date().toISOString() },
        bubbles: true,
        composed: true,
      })
    );
  }
}
