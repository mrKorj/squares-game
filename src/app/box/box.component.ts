import {Component} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {

  color = {background: `#${Math.random().toString(16).substr(-6)}`}

  changeColor() {
    this.color = {background: `#${Math.random().toString(16).substr(-6)}`}
  }

}
