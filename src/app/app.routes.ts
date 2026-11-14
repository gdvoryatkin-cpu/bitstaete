import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sign-in',
    loadComponent: () =>
      import('./screens/auth-placeholder/auth-placeholder.component').then(
        (module) => module.AuthPlaceholderComponent,
      ),
    data: { titleKey: 'route.signIn' },
  },
  {
    path: 'verify',
    loadComponent: () =>
      import('./screens/auth-placeholder/auth-placeholder.component').then(
        (module) => module.AuthPlaceholderComponent,
      ),
    data: { titleKey: 'route.verify' },
  },
  {
    path: '',
    loadComponent: () =>
      import('./screens/shell/shell-screen.component').then(
        (module) => module.ShellScreenComponent,
      ),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./screens/stage-placeholder/stage-placeholder.component').then(
            (module) => module.StagePlaceholderComponent,
          ),
        data: { titleKey: 'nav.overview' },
      },
      {
        path: 'holdings',
        loadComponent: () =>
          import('./screens/stage-placeholder/stage-placeholder.component').then(
            (module) => module.StagePlaceholderComponent,
          ),
        data: { titleKey: 'nav.holdings' },
      },
      {
        path: 'transactions',
        loadComponent: () =>
          import('./screens/stage-placeholder/stage-placeholder.component').then(
            (module) => module.StagePlaceholderComponent,
          ),
        data: { titleKey: 'nav.transactions' },
      },
      {
        path: 'account',
        loadComponent: () =>
          import('./screens/stage-placeholder/stage-placeholder.component').then(
            (module) => module.StagePlaceholderComponent,
          ),
        data: { titleKey: 'nav.account' },
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./screens/stage-placeholder/stage-placeholder.component').then(
            (module) => module.StagePlaceholderComponent,
          ),
        data: { titleKey: 'nav.contact' },
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
