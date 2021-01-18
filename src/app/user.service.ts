import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  insertUser(user: User): Observable<Object> {
    return this.http.post(`${this.baseURL}` + "/users", user);
  }

  loginUser(user: User): Observable<Object> {
    return this.http.post(`${this.baseURL}` + "/login", user);
  }
}
