import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {ThreadColorService} from '../../services/thread-color.service';
import {ThreadColor} from '../../models/ThreadColor';

@Component({
  selector: 'app-all-colors-display',
  templateUrl: './all-colors-display.component.html',
  styleUrls: ['./all-colors-display.component.css']
})
export class AllColorsDisplayComponent implements OnInit, AfterContentChecked {
  threadColors!: ThreadColor[];
  selectedColor!: ThreadColor;

  constructor(private threadColorService: ThreadColorService) { }

  ngOnInit(): void {
    this.getThreadColors();
  }

  ngAfterContentChecked(): void {
    this.getSelectedColor();
  }

  getThreadColors(): void {
    this.threadColorService.getThreadColors().subscribe((threadColors: ThreadColor[]) => this.threadColors = threadColors);
  }

  getSelectedColor(): void {
    if (this.threadColorService.getselectedThreadColor() != null){
      this.selectedColor = this.threadColorService.getselectedThreadColor();
    } else {
      this.selectedColor = this.threadColors[0];
    }
  }

  onSelect(threadColor: ThreadColor): void {
    this.selectedColor = threadColor;
    this.threadColorService.selectThreadColor(threadColor);
  }
}
