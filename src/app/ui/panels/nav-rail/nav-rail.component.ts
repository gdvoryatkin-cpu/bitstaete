import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { IconComponent } from '../../elements/icon/icon.component';
import { NavigationItem } from '../navigation.models';

/**
 * Figma NavRail/Drawer: node `1135:1676`.
 * Public inputs: navigation items, active path, variant, and accessible labels.
 * Public outputs: `navigate`, `closeRequested`, and `signOut` report user intent to the screen.
 */
@Component({
  selector: 'bs-nav-rail',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './nav-rail.component.html',
  styleUrl: './nav-rail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavRailComponent {
  readonly items = input.required<readonly NavigationItem[]>();
  readonly activePath = input.required<string>();
  readonly variant = input<'desktop' | 'drawer'>('desktop');
  readonly navigationLabel = input.required<string>();
  readonly closeLabel = input.required<string>();
  readonly signOutLabel = input.required<string>();
  readonly brandAlt = input.required<string>();

  readonly navigate = output<string>();
  readonly closeRequested = output<void>();
  readonly signOut = output<void>();

  protected select(path: string): void {
    this.navigate.emit(path);
    if (this.variant() === 'drawer') this.closeRequested.emit();
  }
}
