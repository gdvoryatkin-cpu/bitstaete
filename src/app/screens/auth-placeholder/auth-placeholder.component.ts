import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'bs-auth-placeholder',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './auth-placeholder.component.html',
  styleUrl: './auth-placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPlaceholderComponent {
  private readonly route = inject(ActivatedRoute);
  protected readonly titleKey = String(this.route.snapshot.data['titleKey'] ?? 'route.notFound');
}
