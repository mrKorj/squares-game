import {Component, Input} from '@angular/core';
import {DbService, IBox} from "../db.service";

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() item: IBox

  constructor(private dbService: DbService) {}

  async changeColor() {
    const color = {background: `#${Math.random().toString(16).substr(-6)}`}
    await this.dbService.updateColor(color, this.item.id)
  }

}
