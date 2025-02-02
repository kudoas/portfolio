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
  readonly #apiUrl = environment.apiUrl;

  async getArticles(): Promise<Article[]> {
    const [hatena, zenn] = await Promise.all([
      this.#fetchHatenaArticles(),
      this.#fetchZennArticles(),
    ]);
    return [...hatena, ...zenn];
  }

  async #fetchZennArticles() {
    const res = await lastValueFrom(this.#httpClient.get<ZennArticleResponse>(this.#apiUrl));
    return res.articles
      .filter(({ published_at }) => published_at)
      .map(({ id, title, path, published_at }) => ({
        id,
        title,
        url: `https://zenn.dev${path}`,
        publishedAt: new Date(published_at!),
        kind: 'zenn' as const,
      }));
  }

  async #fetchHatenaArticles() {
    const articles: Article[] = [
      {
        id: 10000,
        title:
          'RubyとRailsのコミッターである松田明さんの講演でプログラミングを楽しむモチベーションが上がりました',
        url: 'https://tech.classi.jp/entry/2022/09/07/120000',
        publishedAt: new Date('2022-09-07'),
        kind: 'hatena',
      },
      {
        id: 10001,
        title: '新卒がAngularのアップデート対応から経験したこと',
        url: 'https://tech.classi.jp/entry/2022/12/10/120000',
        publishedAt: new Date('2022-12-10'),
        kind: 'hatena',
      },
      {
        id: 10002,
        title: 'ライブラリのアップデートを自動化した仕組みの紹介',
        url: 'https://tech.classi.jp/entry/2023/10/04/180000',
        publishedAt: new Date('2023-10-04'),
        kind: 'hatena',
      },
      {
        id: 10003,
        title: 'GitLab本輪読会、他社と合同で振り返りを行いました',
        url: 'https://tech.classi.jp/entry/2024/04/26/170000',
        publishedAt: new Date('2024-04-26'),
        kind: 'hatena',
      },
    ];

    return Promise.resolve(articles);
  }
}
