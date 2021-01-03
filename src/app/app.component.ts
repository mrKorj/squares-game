import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DbService, IBox} from "./db.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dbService: DbService) {}

  boxes$: Observable<IBox[]>;

  ngOnInit(): void {
    this.boxes$ = this.dbService.getBox()
  }
}
