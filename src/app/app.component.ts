import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-sky-selector-for-alex',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
      trigger('box', [
          state('start', style({background: 'blue'})),
          state ('end', style({background: 'red', transform: 'scale(1.1)'})),
          transition('start => end', animate(450)),
          transition('end => start', animate(450))
      ])
  ]
})

export class AppComponent {
    boxState = 'start'

    animate () {
        this.boxState = this.boxState === 'end' ? 'start' : 'end'
    }

 constructor() {
 }

 img = 'https://sun9-73.userapi.com/impg/a-rhD2vgLB97ZU0L6TD9FsIH8Sr6GPCZjPw5bQ/0Ori5LaT4TY.jpg?size=746x746&quality=96&sign=4840005da99d1b7dce2b96768354473c&type=album'
}

