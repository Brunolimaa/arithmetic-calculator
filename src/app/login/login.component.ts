import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {

  }

  login() {
    this.authService.authenticate(this.username, this.password).subscribe({
      next: (response: any) => {  // Adicionar tipo any ou o tipo específico esperado
        this.router.navigate(['/calculator']); // Redirecionar para a rota /calculator
      },
      error: (error: any) => {  // Adicionar tipo any ou o tipo específico esperado
        console.error('Erro de autenticação:', error);
        this.errorMessage = 'Credenciais inválidas';
      }
    });
  }
}