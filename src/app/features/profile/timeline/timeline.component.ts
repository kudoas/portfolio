import { Component, computed, input } from '@angular/core';

import { Article } from '../types';

@Component({
  selector: 'app-profile-timeline',
  imports: [],
  template: `
    @let timelines = displayTimelines();
    <div class="flex flex-col">
      @for (timeline of timelines; track timeline.id) {
        <article class="mt-4">
          <h2 class="text-lg">
            <a class="font-bold" [href]="timeline.url">{{ timeline.title }}</a>
            <span> - {{ timeline.publishedAt }}</span>
          </h2>
        </article>
      }
    </div>
  `,
})
export class TimelineComponent {
  readonly timelines = input.required<Article[]>();
  readonly displayTimelines = computed(() =>
    this.timelines()
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
      .map(({ id, title, url, publishedAt }) => ({
        id,
        title,
        url,
        publishedAt: publishedAt.toLocaleDateString(),
      })),
  );
}
