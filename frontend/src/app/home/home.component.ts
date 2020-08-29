import { Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in'))
  ])
]
})
export class HomeComponent implements OnInit {
  state: string = 'default';
  constructor() { }

  ngOnInit() {
    this.rotate()
  }

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }


}
