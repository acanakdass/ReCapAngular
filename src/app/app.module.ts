import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/BrandComponents/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarComponent } from './components/CarComponents/car/car.component';
import { NaviComponent } from './components/NavbarComponents/navi/navi.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarDetailComponent } from './components/CarComponents/car-detail/car-detail.component';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
// import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/AuthComponents/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CarAddComponent } from './components/CarComponents/car-add/car-add.component';
import { CartSummaryComponent } from './components/CartComponents/cart-summary/cart-summary.component';
import { CartDropdownComponent } from './components/NavbarComponents/cart-dropdown/cart-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    CarComponent,
    CarDetailComponent,
    FilterBrandPipe,
    FilterColorPipe,
    FilterBarComponent,
    LoginComponent,
    CarAddComponent,
    CartSummaryComponent,
    CartDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],

  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
