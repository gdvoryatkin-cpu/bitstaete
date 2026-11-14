import { Injectable, InjectionToken, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AuthSession } from './models';

export interface AuthApi {
  requestCode(email: string): Observable<void>;
  verifyCode(email: string, code: string): Observable<AuthSession>;
  signOut(): Observable<void>;
}

export const AUTH_API = new InjectionToken<AuthApi>('AUTH_API');

@Injectable({ providedIn: 'root' })
export class AuthService implements AuthApi {
  private readonly api = inject(AUTH_API);

  requestCode(email: string): Observable<void> {
    return this.api.requestCode(email);
  }

  verifyCode(email: string, code: string): Observable<AuthSession> {
    return this.api.verifyCode(email, code);
  }

  signOut(): Observable<void> {
    return this.api.signOut();
  }
}

@Injectable()
export class MockAuthApi implements AuthApi {
  requestCode(email: string): Observable<void> {
    void email;
    return of(undefined);
  }

  verifyCode(email: string, code: string): Observable<AuthSession> {
    void code;
    return of({ clientId: 'client-eline-van-dijk', email });
  }

  signOut(): Observable<void> {
    return of(undefined);
  }
}
