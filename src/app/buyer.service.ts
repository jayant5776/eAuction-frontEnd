import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyer } from './buyer';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  private baseURL = "http://localhost:8080/buyers";

  constructor(private httpClient: HttpClient) { }

  getBuyersList(): Observable<Buyer[]> {
    return this.httpClient.get<Buyer[]>(`${this.baseURL}`);
  }

  createBuyer(buyer: Buyer): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, buyer);
  }

  getBuyerById(buyerId: number): Observable<Buyer> {
    return this.httpClient.get<Buyer>(`${this.baseURL}/${buyerId}`);
  }

  updateBuyer(buyerId: number, buyer: Buyer): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${buyerId}`, buyer);
  }

  deleteBuyer(buyerId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${buyerId}`);
  }
}
