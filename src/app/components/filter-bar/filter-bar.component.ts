import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  selectedBrandId: number = 0;
  selectedColorId: number = 0;
  brands: Brand[];
  colors: Color[];
  constructor(private brandService: BrandService, private colorService: ColorService) { }


  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  }
  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    })
  }
}
