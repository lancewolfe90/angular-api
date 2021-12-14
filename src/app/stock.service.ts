import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  getStocks(): Observable<any> {
    return this.http.get('https://angular-stocks-api-default-rtdb.firebaseio.com/stocks.json');
  }
}
