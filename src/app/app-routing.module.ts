import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/BrandComponents/brand/brand.component';
import { CarAddComponent } from './components/CarComponents/car-add/car-add.component';
import { CarDetailComponent } from './components/CarComponents/car-detail/car-detail.component';
import { CarComponent } from './components/CarComponents/car/car.component';
import { CartSummaryComponent } from './components/CartComponents/cart-summary/cart-summary.component';
import { ColorComponent } from './components/color/color.component';
import { LoginComponent } from './components/AuthComponents/login/login.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';
import { CartDropdownComponent } from './components/NavbarComponents/cart-dropdown/cart-dropdown.component';

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
    path: "cars/add", component: CarAddComponent, canActivate: [LoginGuard]
  },
  {
    path: "cars/getByBrand/:brandId", component: CarComponent
  },
  {
    path: "cars/getByColor/:colorId", component: CarComponent
  },
  {
    path: "cars/color/:colorId/brand/:brandId", component: CarComponent
  },
  {
    path: "cars/detail/:carId", component: CarDetailComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "cart", component: CartSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
