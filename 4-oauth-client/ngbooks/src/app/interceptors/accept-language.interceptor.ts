import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AcceptLanguageInterceptor implements HttpInterceptor {
  public constructor() {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = request.headers.set('Accept-Language', 'en-GB');

    const modifiedRequest = request.clone({ headers });

    return next.handle(modifiedRequest);
  }
}
