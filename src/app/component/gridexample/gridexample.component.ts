import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-gridexample',
  templateUrl: './gridexample.component.html',
  styleUrls: ['./gridexample.component.css']
})
export class GridexampleComponent implements OnInit {
  breakpoint: number;
  constructor() { }

  ngOnInit() {
    this.breakpoint = ( window.innerWidth <= 800 && window.innerWidth >= 400) ? 2 : (window.innerWidth <= 400) ? 1 :3;
    console.log(this.breakpoint, 'brkpoint', window.innerWidth);
  }
  onResize(event) {
    this.breakpoint = ( window.innerWidth <= 800 && window.innerWidth >= 400) ? 2 : (window.innerWidth <= 400) ? 1 :3;
    console.log(this.breakpoint, 'brkpoint', window.innerWidth);
  }

}
