import { Portfolio, Transaction } from './models';

export const MOCK_PORTFOLIOS: readonly Portfolio[] = [
  {
    id: 'portfolio-main',
    name: 'Van Dijk Family Office',
    totalValueEur: 1243320.48,
    updatedAt: '2026-10-12T09:30:00Z',
    holdings: [
      { assetId: 'btc', name: 'Bitcoin', symbol: 'BTC', valueEur: 514734.68, weightPercent: 41.4 },
      { assetId: 'eth', name: 'Ethereum', symbol: 'ETH', valueEur: 404079.16, weightPercent: 32.5 },
      {
        assetId: 'usdc',
        name: 'USD Coin',
        symbol: 'USDC',
        valueEur: 212607.8,
        weightPercent: 17.1,
      },
      { assetId: 'ada', name: 'Cardano', symbol: 'ADA', valueEur: 111898.84, weightPercent: 9 },
    ],
  },
];

export const MOCK_TRANSACTIONS: readonly Transaction[] = [
  {
    id: 'transaction-001',
    portfolioId: 'portfolio-main',
    date: '2026-03-12',
    type: 'deposit',
    status: 'completed',
    amountEur: 25000,
  },
  {
    id: 'transaction-002',
    portfolioId: 'portfolio-main',
    date: '2026-02-28',
    type: 'withdrawal',
    status: 'completed',
    amountEur: -8400,
  },
];
