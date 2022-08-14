import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('Authorization')
  }

  setToken(token: string) {
    localStorage.setItem('Authorization', `Bearer ${token}`)
    this.router.navigate(['/'])
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/auth', 'login'])
  }
}
