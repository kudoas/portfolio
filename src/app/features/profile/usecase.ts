import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Provider } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { environment } from '../../../environments/environment.development';
import { Article } from './types';

export type ZennArticleResponse = {
  articles: ZennArticle[];
};

export type ZennArticle = {
  id: number;
  title: string;
  path: string;
  published_at: string | null;
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
  readonly #zennApiUrl = environment.zennApiUrl;

  async getArticles(): Promise<Article[]> {
    const res = await lastValueFrom(this.#httpClient.get<ZennArticleResponse>(this.#zennApiUrl));
    return res.articles
      .filter(({ published_at }) => published_at)
      .map(({ id, title, path, published_at }) => ({
        id: String(id),
        title,
        url: `https://zenn.dev${path}`,
        publishedAt: new Date(published_at!),
        kind: 'zenn',
      }));
  }
}
