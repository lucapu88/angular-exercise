import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;
  constructor() {}
  login(): void {
    this.isAuthenticated = true;
  }
}
