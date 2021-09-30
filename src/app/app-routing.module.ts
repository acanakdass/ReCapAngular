import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {
    path: "", pathMatch: "full", component: CarComponent
  },
  {
    path: "brands", component: BrandComponent
  },
  {
    path: "colors", component: ColorComponent
  },
  {
    path: "rentals", component: RentalComponent
  },
  {
    path: "cars", component: CarComponent
  },
  {
    path: "cars/getByBrand/:brandId", component: CarComponent
  },
  {
    path: "cars/getByColor/:colorId", component: CarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
