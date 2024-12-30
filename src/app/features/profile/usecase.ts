import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Provider } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { environment } from '../../../environments/environment.development';

type ZennResponse = {
  items: {
    title: string;
    contentSnippet: string;
    link: string;
    isoDate: string;
  }[];
};

export function provideProfileUsecase(instance?: ProfileUsecase): Provider[] {
  return [
    {
      provide: ProfileUsecase,
      useFactory: () => instance ?? new ProfileUsecase(),
    },
  ];
}

@Injectable()
export class ProfileUsecase {
  readonly #httpClient = inject(HttpClient);
  readonly #apiUrl = environment.apiUrl;

  async getArticles() {
    const res = await lastValueFrom(this.#httpClient.get(this.#apiUrl));
    console.log(res);
    return res;
  }
}
