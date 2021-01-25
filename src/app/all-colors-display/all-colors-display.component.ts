import { Component, OnInit } from '@angular/core';
import {ThreadColorService} from '../services/thread-color.service';
import {ThreadColor} from '../ThreadColor';

@Component({
  selector: 'app-all-colors-display',
  templateUrl: './all-colors-display.component.html',
  styleUrls: ['./all-colors-display.component.css']
})
export class AllColorsDisplayComponent implements OnInit {
  threadColors!: ThreadColor[];
  selectedColor!: ThreadColor;

  constructor(private threadColorService: ThreadColorService) { }

  ngOnInit(): void {
    this.getThreadColors();
  }

  getThreadColors(): void {
    this.threadColorService.getThreadColors().subscribe((threadColors: ThreadColor[]) => this.threadColors = threadColors);
  }

  onSelect(threadColor: ThreadColor): void {
    this.threadColorService.selectThreadColor(threadColor);
  }
}
