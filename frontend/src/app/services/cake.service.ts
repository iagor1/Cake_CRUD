import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cake } from '../models/cake';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  private url = 'Cake';
  constructor(private http: HttpClient) { }

  public getCakes(): Observable<Cake[]> {
    return this.http.get<Cake[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateCake(cake: Cake): Observable<Cake[]> {
    return this.http.put<Cake[]>(`${environment.apiUrl}/${this.url}`,cake);
  }

  public createCake(cake: Cake): Observable<Cake[]> {
    return this.http.post<Cake[]>(`${environment.apiUrl}/${this.url}`,cake);
  }

  public deleteCake(cake: Cake): Observable<Cake[]> {
    return this.http.delete<Cake[]>(`${environment.apiUrl}/${this.url}/${cake.id}`);
  }


}
