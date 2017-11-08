import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercept!', req);
    const copiedReq = req.clone({
      params: req.params.append('auth', this.authService.getToken())
    });
    return next.handle(copiedReq);
    // return null;
  }
}
