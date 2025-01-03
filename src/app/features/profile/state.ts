import { Provider, signal } from '@angular/core';
import { Article } from './types';

export function provideProfileState(instance?: ProfileState): Provider[] {
  return [
    {
      provide: ProfileState,
      useFactory: () => instance ?? new ProfileState(),
    },
  ];
}

export class ProfileState {
  readonly timeline = signal<Article[]>([]);
}
