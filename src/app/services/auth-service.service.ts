import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  private _isAuthenticated = false;
  private userEmailSubject = new BehaviorSubject<string>('');
  public userEmail$ = this.userEmailSubject.asObservable();



  constructor() {}

  setUserEmail(email: string) {
    this.userEmailSubject.next(email);
  }



  clearUserEmail() {
    this.userEmailSubject.next('');
  }
  isAuthenticated(): boolean {
    return this._isAuthenticated;
  }
}
