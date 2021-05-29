import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BOOKS_API_BASE_PATH } from '@books/books.config';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  public constructor() {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes(BOOKS_API_BASE_PATH)) {
      const params = request.params.set('key', environment.firebaseConfig.apiKey);

      const modifiedRequest = request.clone({
        params: params
      });
      return next.handle(modifiedRequest);
    }
    return next.handle(request);
  }
}
