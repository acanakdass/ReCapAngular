import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private authService: AuthService, private toastrService: ToastrService) { }

  isAuthenticated: boolean;

  getIsAuthenticated() {
    this.isAuthenticated = this.authService.IsAuthenticated();
    console.log(this.isAuthenticated);
  }
  logOut() {
    let result = this.authService.logout();
    this.toastrService.success(result.message)
  }
  ngOnInit(): void {
    this.getIsAuthenticated();
  }

}
