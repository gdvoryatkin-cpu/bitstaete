import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

import { TranslatePipe } from '../../i18n/translate.pipe';
import { TranslationService } from '../../i18n/translation.service';
import { NavRailComponent } from '../../ui/panels/nav-rail/nav-rail.component';
import { NavigationItem } from '../../ui/panels/navigation.models';
import { TabBarComponent } from '../../ui/panels/tab-bar/tab-bar.component';
import { TopBarComponent } from '../../ui/panels/top-bar/top-bar.component';

@Component({
  selector: 'bs-shell-screen',
  standalone: true,
  imports: [NavRailComponent, RouterOutlet, TabBarComponent, TopBarComponent, TranslatePipe],
  templateUrl: './shell-screen.component.html',
  styleUrl: './shell-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellScreenComponent {
  private readonly router = inject(Router);
  private readonly translations = inject(TranslationService);
  private readonly drawer = viewChild<ElementRef<HTMLElement>>('drawer');
  private readonly menuButton = viewChild<ElementRef<HTMLElement>>('menuButton');
  private restoreMenuFocus = false;

  protected readonly drawerOpen = signal(false);
  protected readonly activePath = signal(this.router.url.split('?')[0]);
  protected readonly allNavigation = this.createNavigation([
    ['/dashboard', 'nav.overview', 'home'],
    ['/holdings', 'nav.holdings', 'holdings'],
    ['/transactions', 'nav.transactions', 'transactions'],
    ['/account', 'nav.account', 'account'],
    ['/contact', 'nav.contact', 'contact'],
  ]);
  protected readonly primaryNavigation = computed(() => this.allNavigation.slice(0, 3));
  protected readonly copy = {
    navigation: this.translations.translate('nav.openMenu'),
    closeNavigation: this.translations.translate('nav.closeMenu'),
    signOut: this.translations.translate('nav.signOut'),
    brand: this.translations.translate('brand.name'),
    clientName: this.translations.translate('client.name'),
    organisation: this.translations.translate('client.organisation'),
    notifications: this.translations.translate('topbar.notifications'),
    clientMenu: this.translations.translate('topbar.clientMenu'),
  } as const;

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((event) => this.activePath.set(event.urlAfterRedirects.split('?')[0]));
  }

  protected openDrawer(): void {
    this.restoreMenuFocus = true;
    this.drawerOpen.set(true);
    requestAnimationFrame(() => {
      this.drawer()?.nativeElement.querySelector<HTMLElement>('button')?.focus();
    });
  }

  protected closeDrawer(): void {
    this.drawerOpen.set(false);
    if (this.restoreMenuFocus) {
      requestAnimationFrame(() =>
        this.menuButton()?.nativeElement.querySelector<HTMLButtonElement>('button')?.focus(),
      );
      this.restoreMenuFocus = false;
    }
  }

  protected navigate(path: string): void {
    void this.router.navigateByUrl(path);
  }

  protected closeFromScrim(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.closeDrawer();
  }

  @HostListener('document:keydown', ['$event'])
  protected handleDrawerKeyboard(event: KeyboardEvent): void {
    if (!this.drawerOpen()) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeDrawer();
      return;
    }
    if (event.key !== 'Tab') return;

    const focusable = this.drawer()?.nativeElement.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href]',
    );
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  private createNavigation(
    items: readonly (readonly [string, string, NavigationItem['icon']])[],
  ): readonly NavigationItem[] {
    return items.map(([path, labelKey, icon]) => ({
      path,
      label: this.translations.translate(labelKey),
      icon,
    }));
  }
}
