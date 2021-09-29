import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  isDataLoaded = false;
  selectedBrand: Brand;

  constructor(private brandService: BrandService) { }


  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
      this.isDataLoaded = true;
      console.log(this.brands)
    });
  }
  setSelectedBrand(brand: Brand) {
    this.selectedBrand = brand;
  }
  getSelectedBrandClass(brand: Brand) {
    if (brand == this.selectedBrand) {
      return "list-group-item active"
    }
    return "list-group-item"
  }

}
