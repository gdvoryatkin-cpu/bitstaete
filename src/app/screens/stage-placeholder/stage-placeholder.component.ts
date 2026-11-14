import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'bs-stage-placeholder',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './stage-placeholder.component.html',
  styleUrl: './stage-placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StagePlaceholderComponent {
  private readonly route = inject(ActivatedRoute);
  protected readonly titleKey = String(this.route.snapshot.data['titleKey'] ?? 'route.notFound');
}
