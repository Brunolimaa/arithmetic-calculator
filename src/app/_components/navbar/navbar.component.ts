import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {

  isLoged: boolean = false;

  constructor(private authService: AuthService) { 
    console.log("token collapseElement: "+ authService.getToken());
  }

  ngAfterViewInit() {
    const collapseElement = document.getElementById('navbarToggleExternalContent');
    if (collapseElement) {      
      new bootstrap.Collapse(collapseElement, { toggle: false });
    }
  }

  verifyMenu() {
    if(this.authService.getToken() != null && this.authService.getToken() != "") {
      this.isLoged = true;
    }    
  }

  logout() {    
    this.authService.setToken("");
    this.isLoged = false;
  }
}