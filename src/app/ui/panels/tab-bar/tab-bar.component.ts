import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { IconComponent } from '../../elements/icon/icon.component';
import { NavigationItem } from '../navigation.models';

/**
 * Figma TabBar: node `964:495`.
 * Public inputs: primary navigation items, active path, and accessible label.
 * Public output: `navigate` reports the selected destination.
 */
@Component({
  selector: 'bs-tab-bar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBarComponent {
  readonly items = input.required<readonly NavigationItem[]>();
  readonly activePath = input.required<string>();
  readonly navigationLabel = input.required<string>();
  readonly navigate = output<string>();
}
