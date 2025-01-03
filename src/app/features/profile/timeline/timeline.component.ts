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
            <!-- label -->
            @switch (timeline.kind) {
              @case ('zenn') {
                <span class="ml-1 text-sm bg-[#3ea8ff] text-white px-1 rounded-md">Zenn</span>
              }
              @case ('hatena') {
                <span class="ml-1 text-sm bg-[#c6da9e] text-white px-1 rounded-md">Hatena</span>
              }
            }
            <span class="text-sm ml-1 bg-slate-300 rounded-md px-1">{{
              timeline.publishedAt
            }}</span>
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
      .map(({ id, title, url, publishedAt, kind }) => ({
        id,
        title,
        url,
        publishedAt: publishedAt.toLocaleDateString(),
        kind,
      })),
  );
}
