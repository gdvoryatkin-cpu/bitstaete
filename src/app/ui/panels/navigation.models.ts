import { IconName } from '../elements/icon/icon.component';

export interface NavigationItem {
  readonly path: string;
  readonly label: string;
  readonly icon: IconName;
}
