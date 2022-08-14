import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import jwt_decode from 'jwt-decode'
import * as moment from "moment"
import { ADMIN } from './admin.constant'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('Authorization')
    if (!token) return false

    // @ts-ignore
    const { role, status, expAt } = jwt_decode(token.slice(7))
    return moment().isBefore(expAt) && role === ADMIN.ROLE && status === ADMIN.STATUS
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
