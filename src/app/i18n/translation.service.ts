import { Injectable } from '@angular/core';

import translations from './en.json';

export type TranslationKey = keyof typeof translations;

@Injectable({ providedIn: 'root' })
export class TranslationService {
  translate(key: TranslationKey | string): string {
    return translations[key as TranslationKey] ?? key;
  }
}
