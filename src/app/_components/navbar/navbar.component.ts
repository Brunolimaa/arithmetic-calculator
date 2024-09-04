import { Component, AfterViewInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Inicializa o collapse manualmente se necessário
    const collapseElement = document.getElementById('navbarToggleExternalContent');
    if (collapseElement) {
      new bootstrap.Collapse(collapseElement, { toggle: false });
    }
  }
}