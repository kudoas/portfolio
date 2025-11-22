import { Component, Input, signal } from '@angular/core';
import { SocialLink } from '../types';

@Component({
  selector: 'app-profile-links',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col md:ml-20">
      @for (link of links(); track link.label) {
        <dl class="mt-2 flex text-gray md:mx-0 md:mt-4">
          <dt class="w-40 text-lg font-bold">{{ link.label }}</dt>
          <dd>
            <a [href]="link.url" class="underline hover:text-gray-500">{{ link.name }}</a>
          </dd>
        </dl>
      }
    </div>
  `,
})
export class LinksComponent {
  readonly #links = signal<SocialLink[]>([]);
  readonly links = this.#links.asReadonly();

  @Input({ required: true })
  set linksInput(value: SocialLink[]) {
    this.#links.set(value);
  }
}
