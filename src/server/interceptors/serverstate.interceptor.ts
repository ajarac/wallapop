import { tap } from 'rxjs/operators';

import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

@Injectable()
export class ServerStateInterceptor implements HttpInterceptor {
    constructor(private transferState: TransferState) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            tap((event) => {
                if (event instanceof HttpResponse) {
                    this.transferState.set(makeStateKey(req.url), event.body);
                }
            }),
        );
    }
}
