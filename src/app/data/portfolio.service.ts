import { Injectable, InjectionToken, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MOCK_PORTFOLIOS } from './mock-data';
import { Portfolio } from './models';

export interface PortfolioApi {
  getPortfolio(id: string): Observable<Portfolio>;
}

export const PORTFOLIO_API = new InjectionToken<PortfolioApi>('PORTFOLIO_API');

@Injectable({ providedIn: 'root' })
export class PortfolioService implements PortfolioApi {
  private readonly api = inject(PORTFOLIO_API);

  getPortfolio(id: string): Observable<Portfolio> {
    return this.api.getPortfolio(id);
  }
}

@Injectable()
export class MockPortfolioApi implements PortfolioApi {
  getPortfolio(id: string): Observable<Portfolio> {
    const portfolio = MOCK_PORTFOLIOS.find((item) => item.id === id) ?? MOCK_PORTFOLIOS[0];
    return of(portfolio);
  }
}
