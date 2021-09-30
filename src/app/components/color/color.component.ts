import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: Color[];
  isDataLoaded = false;
  selectedColor: Color;
  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
      this.isDataLoaded = true;
    });
  }

  setSelectedColor(color: Color) {
    this.selectedColor = color;
  }

  getSelectedColorClass(color: Color) {
    if (color == this.selectedColor) {
      return "list-group-item active"
    }
    return "list-group-item"
  }
}
