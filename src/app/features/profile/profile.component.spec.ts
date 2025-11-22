import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { render } from '@testing-library/angular';
import { ProfileComponent } from './profile.component';
import { ArticleCacheService } from './article-cache.service';
import { LinksComponent } from './links/links.component';
import { TimelineComponent } from './timeline/timeline.component';

describe('ProfileComponent', () => {
  it('should create', async () => {
    const mockHttpClient: Pick<HttpClient, 'get'> = {
      get: () =>
        of({
          articles: [{ id: 1, title: 'title', path: '/article', published_at: '2024-01-01' }],
        }),
    };
    const mockCache: Pick<ArticleCacheService, 'getCache' | 'setCache'> = {
      getCache: () => Promise.resolve(undefined),
      setCache: () => Promise.resolve(),
    };

    const { fixture } = await render(ProfileComponent, {
      imports: [LinksComponent, TimelineComponent],
      declarations: [LinksComponent, TimelineComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: HttpClient, useValue: mockHttpClient },
        { provide: ArticleCacheService, useValue: mockCache },
      ],
    });

    expect(fixture.componentInstance).toBeTruthy();
  });
});
