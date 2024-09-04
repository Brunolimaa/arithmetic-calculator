import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service'; // Certifique-se de que o caminho está correto
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private apiUrl = `${environment.apiBaseUrl}/api/v1/operations/`;

  constructor(private http: HttpClient, private authService: AuthService) { }

  operation(operation: string, number1: number, number2: number): Observable<number> {
    const token = this.authService.getToken(); 

    const params = new HttpParams()
      .set('number1', number1.toString())
      .set('number2', number2.toString());

    const headers = new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : ''
    });

    return this.http.post<string>(`${this.apiUrl}${operation}`, null, { headers, params })
      .pipe(
        map((response: string) => Number(response))
      );
  }
}
