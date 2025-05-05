import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  role_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`; 
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    // Check if user is already logged in
    this.checkAuthStatus();
  }

  private checkAuthStatus() {
    const token = localStorage.getItem('accessToken');
    const userRole = localStorage.getItem('userRole');
    
    if (token && userRole) {
      this.currentUserSubject.next({ role: userRole });
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, {
      email,
      password
    }).pipe(
      tap(response => {
        if (response && response.data) {
          // Store tokens
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem('refreshToken', response.data.refreshToken);
          
          // Get role ID and map to role string
          const roleId = response.data.role_id || response.data.roleId;
          let roleString = 'Job Seeker'; // Default
          
          if (roleId === 1) {
            roleString = 'Admin';
          } else if (roleId === 2) {
            roleString = 'Recruiter'; 
          } else if (roleId === 3) {
            roleString = 'Job Seeker';
          }
          
          // Store role
          localStorage.setItem('userRole', roleString);
          
          // Update current user state
          this.currentUserSubject.next({
            email: email,
            role: roleString
          });
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        throw error;
      })
    );
  }

  registerUser(payload: RegisterPayload): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, payload).pipe(
      catchError(error => {
        console.error('Registration error:', error);
        throw error;
      })
    );
  }

  logout(): Observable<any> {
    const refreshToken = localStorage.getItem('refreshToken');
    
    // Clear local storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userRole');
    
    // Reset current user subject
    this.currentUserSubject.next(null);
    
    // Call logout API if refresh token exists
    if (refreshToken) {
      return this.http.post<any>(`${this.apiUrl}/logout`, { refreshToken });
    }
    
    return of({ success: true });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  getCurrentUser(): any {
    return this.currentUserSubject.value;
  }

  getCurrentUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  // Refresh token method
  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refreshToken');
    
    if (!refreshToken) {
      return of(null);
    }
    
    return this.http.post<any>(`${this.apiUrl}/refresh-token`, { refreshToken }).pipe(
      tap(response => {
        if (response && response.data) {
          localStorage.setItem('accessToken', response.data.accessToken);
          
          // Update refresh token if provided
          if (response.data.refreshToken) {
            localStorage.setItem('refreshToken', response.data.refreshToken);
          }
        }
      })
    );
  }
}