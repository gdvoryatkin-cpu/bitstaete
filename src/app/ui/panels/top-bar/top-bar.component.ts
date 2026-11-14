import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import { IconComponent } from '../../elements/icon/icon.component';

/**
 * Figma TopBar: node `1273:3235`.
 * Public inputs: client identity and accessible action labels.
 * Public outputs: menu, notifications, and client-menu actions.
 */
@Component({
  selector: 'bs-top-bar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  readonly clientName = input.required<string>();
  readonly organisation = input.required<string>();
  readonly openMenuLabel = input.required<string>();
  readonly notificationsLabel = input.required<string>();
  readonly clientMenuLabel = input.required<string>();

  readonly openMenu = output<void>();
  readonly openNotifications = output<void>();
  readonly openClientMenu = output<void>();

  protected readonly initials = computed(() =>
    this.clientName()
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase(),
  );
}
