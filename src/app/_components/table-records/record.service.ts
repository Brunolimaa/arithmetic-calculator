import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { OperationRecord } from '../../_models/operation-record.model';
import { AuthService } from '../../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  private apiUrl = `${environment.apiBaseUrl}/api/v1/operations`;

  constructor(private http: HttpClient, private authService: AuthService) { }

  getRecords(page: number, size: number): Observable<{ content: OperationRecord[], totalElements: number }> {
    const token = this.authService.getToken(); // Obtém o token do AuthService

    const headers = new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : ''
    });

    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<{ content: OperationRecord[], totalElements: number }>(this.apiUrl, { headers, params });
  }
}
