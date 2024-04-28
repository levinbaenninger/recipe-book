import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandleService {
  constructor(private router: Router) {}

  handle(error: HttpErrorResponse) {
    if (error.status === 404) {
      this.router.navigate(['/error/404']);
    } else if (error.status === 500 || error.status === 0) {
      this.router.navigate(['/error/500']);
    } else {
      this.router.navigate(['/error']);
    }
  }
}
