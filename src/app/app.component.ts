import {Component} from '@angular/core';
import {state, style, trigger} from '@angular/animations';

@Component({
  selector: 'app-sky-selector-for-alex',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
      trigger('box', [
          state('Первое занятие бесплатно!', style({background: 'blue'})),
          state ('Научим делать сальто на первом занятии', style({background: 'red'}))
      ])
  ]
})

export class AppComponent {
    boxState = 'Первое занятие бесплатно!'

    animate () {
        this.boxState = this.boxState === 'Научим делать сальто на первом занятии' ? 'Первое занятие бесплатно!' : 'Научим делать сальто на первом занятии'
    }

 constructor() {
 }

 img = 'https://sun9-73.userapi.com/impg/a-rhD2vgLB97ZU0L6TD9FsIH8Sr6GPCZjPw5bQ/0Ori5LaT4TY.jpg?size=746x746&quality=96&sign=4840005da99d1b7dce2b96768354473c&type=album'
}

