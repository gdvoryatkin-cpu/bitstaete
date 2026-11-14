import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type IconName =
  | 'home'
  | 'holdings'
  | 'transactions'
  | 'account'
  | 'contact'
  | 'sign-out'
  | 'bell'
  | 'chevron-down'
  | 'menu'
  | 'close';

const ICON_PATHS: Readonly<Record<IconName, string>> = {
  home: '/assets/figma/home.svg',
  holdings: '/assets/figma/holdings.svg',
  transactions: '/assets/figma/transactions.svg',
  account: '/assets/figma/account.svg',
  contact: '/assets/figma/contact.svg',
  'sign-out': '/assets/figma/sign-out.svg',
  bell: '/assets/figma/bell.svg',
  'chevron-down': '/assets/figma/chevron-down.svg',
  menu: '/assets/figma/menu.svg',
  close: '/assets/figma/close.svg',
};

/**
 * Figma icon library: node `433:3177`.
 * Public inputs: `name` selects the icon asset; `size` sets its square size in pixels.
 */
@Component({
  selector: 'bs-icon',
  standalone: true,
  template: '<span class="icon" aria-hidden="true"></span>',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.width.px]': 'size()',
    '[style.height.px]': 'size()',
    '[style.--bs-icon-url]': 'iconUrl()',
    'aria-hidden': 'true',
  },
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input(20);
  protected readonly iconUrl = computed(() => `url("${ICON_PATHS[this.name()]}")`);
}
