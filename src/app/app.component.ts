import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-sky-selector-for-alex',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
      trigger('box', [
          state('pervoe', style({background: 'blue'})),
          state ('end', style({background: 'red', transform: 'scale(1.1)'})),
          state ('special', style({background: 'orange', transform: 'scale(0.9)'})),

          transition('pervoe => end', animate(450)),
          transition('end => special', animate(450)),
          transition('special => pervoe', animate(500)),
      ])
  ]
})

export class AppComponent {
    boxState = 'pervoe'

    animate () {
        if (this.boxState === 'pervoe') {
            this.boxState = 'end'
        } else if (this.boxState === 'end') {
            this.boxState = 'special'
        } else if (this.boxState === 'special') {
            this.boxState = 'pervoe'
        }
    }


 constructor() {
 }

 img = 'https://sun9-73.userapi.com/impg/a-rhD2vgLB97ZU0L6TD9FsIH8Sr6GPCZjPw5bQ/0Ori5LaT4TY.jpg?size=746x746&quality=96&sign=4840005da99d1b7dce2b96768354473c&type=album'
}

