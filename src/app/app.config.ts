import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { AUTH_API, MockAuthApi } from './data/auth.service';
import { MockPortfolioApi, PORTFOLIO_API } from './data/portfolio.service';
import { MockTransactionsApi, TRANSACTIONS_API } from './data/transactions.service';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: PORTFOLIO_API, useClass: MockPortfolioApi },
    { provide: TRANSACTIONS_API, useClass: MockTransactionsApi },
    { provide: AUTH_API, useClass: MockAuthApi },
  ],
};
