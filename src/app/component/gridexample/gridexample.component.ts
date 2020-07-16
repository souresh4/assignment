import { Component, OnInit } from '@angular/core';
import { CustomPipe } from '../../pipe/custom.pipe';
export interface Grid {
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
  gridData: Grid[] = [
    { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!', cols: 1, rows: 2, color: 'lightblue' },

    { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus ut consequatur!', cols: 1, rows: 2, color: 'lightgreen' },
    
    { text: 'Three', cols: 1, rows: 2, color: 'lightpink' },
    { text: 'Four', cols: 1, rows: 2, color: '#DDBDF1' },
    { text: 'Five', cols: 1, rows: 2, color: '#DDBDF1' },
    { text: 'SIX', cols: 1, rows: 2, color: 'red' }
  ];
  constructor() { }

  ngOnInit() {
    this.breakpoint = ( window.innerWidth <= 800 && window.innerWidth >= 400) ? 2 : (window.innerWidth <= 400) ? 1 :3;
  }
  onResize(event) {
    this.breakpoint = ( window.innerWidth <= 800 && window.innerWidth >= 400) ? 2 : (window.innerWidth <= 400) ? 1 :3;
  }

}
