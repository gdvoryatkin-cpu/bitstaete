import { Injectable, InjectionToken, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MOCK_TRANSACTIONS } from './mock-data';
import { TransactionFilters, TransactionPage } from './models';

export interface TransactionsApi {
  getTransactions(filters: TransactionFilters): Observable<TransactionPage>;
}

export const TRANSACTIONS_API = new InjectionToken<TransactionsApi>('TRANSACTIONS_API');

@Injectable({ providedIn: 'root' })
export class TransactionsService implements TransactionsApi {
  private readonly api = inject(TRANSACTIONS_API);

  getTransactions(filters: TransactionFilters): Observable<TransactionPage> {
    return this.api.getTransactions(filters);
  }
}

@Injectable()
export class MockTransactionsApi implements TransactionsApi {
  getTransactions(filters: TransactionFilters): Observable<TransactionPage> {
    const page = filters.page ?? 1;
    const items = MOCK_TRANSACTIONS.filter(
      (item) =>
        item.portfolioId === filters.portfolioId &&
        (!filters.type || item.type === filters.type) &&
        (!filters.status || item.status === filters.status),
    );

    return of({ items, page, pageSize: 10, total: items.length });
  }
}
