import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiBaseUrl}/arithmetic-calculator/auth`;

  private token: string | null = null;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('authToken');
  }

  getToken(): string | null {
    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  clearToken(): void {
    this.token = null;
    localStorage.removeItem('authToken');
  }

  authenticate(username: string, password: string): Observable<string> {
    this.clearToken();
    console.log('CAIU AQUI: '+username+' - '+password+' token?>'+this.token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      username: username,
      password: password
    };

    return this.http.post<string>(this.apiUrl, body, { headers, responseType: 'text' as 'json' }).pipe(
      tap(token => {
        this.setToken(token);
      })
    );
  }
}
