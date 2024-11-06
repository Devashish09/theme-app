import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSource = new BehaviorSubject('light');
  currentTheme$ = this.themeSource.asObservable();

  toggleTheme() {
    this.themeSource.next(
      this.themeSource.value === 'light' ? 'dark' : 'light'
    );
  }
}
