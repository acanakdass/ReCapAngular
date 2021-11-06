import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from "jwt-decode";
import { decodedTokenModel } from '../../../models/decodedTokenModel';
@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private authService: AuthService, private toastrService: ToastrService) { }

  isAuthenticated: boolean;

  decodedToken: decodedTokenModel;
  currentUser = { name: '', id: '', email: '' }

  getIsAuthenticated() {
    this.isAuthenticated = this.authService.IsAuthenticated();
  }
  logOut() {
    let result = this.authService.logout();
    this.toastrService.success(result.message)
  }
  decode(): void {
    var token = localStorage.getItem('token');
    if (token) {
      this.decodedToken = jwt_decode(token);

      this.currentUser.email = this.decodedToken.email;
      this.currentUser.name = this.decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      this.currentUser.id = this.decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      console.log(this.currentUser)
    }
  }


  ngOnInit(): void {
    this.getIsAuthenticated();
    this.decode();
  }
}
