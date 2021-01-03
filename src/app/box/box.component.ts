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

  color: {}

  async changeColor() {
    this.color = {background: `#${Math.random().toString(16).substr(-6)}`}
    await this.dbService.updateColor(this.color, this.item.id)
  }

  ngOnInit(): void {
    this.color = {background: this.item.background}
  }

}
