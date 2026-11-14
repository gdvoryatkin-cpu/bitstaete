export interface Holding {
  readonly assetId: string;
  readonly name: string;
  readonly symbol: string;
  readonly valueEur: number;
  readonly weightPercent: number;
}

export interface Portfolio {
  readonly id: string;
  readonly name: string;
  readonly totalValueEur: number;
  readonly holdings: readonly Holding[];
  readonly updatedAt: string;
}

export type TransactionType = 'deposit' | 'withdrawal';
export type TransactionStatus = 'completed' | 'pending' | 'failed';

export interface Transaction {
  readonly id: string;
  readonly portfolioId: string;
  readonly date: string;
  readonly type: TransactionType;
  readonly status: TransactionStatus;
  readonly amountEur: number;
}

export interface TransactionFilters {
  readonly portfolioId: string;
  readonly type?: TransactionType;
  readonly status?: TransactionStatus;
  readonly page?: number;
}

export interface TransactionPage {
  readonly items: readonly Transaction[];
  readonly page: number;
  readonly pageSize: number;
  readonly total: number;
}

export interface AuthSession {
  readonly clientId: string;
  readonly email: string;
}
