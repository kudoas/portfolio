import { Component, input } from '@angular/core';
import { SocialLink } from '../types';

@Component({
  selector: 'app-profile-links',
  imports: [],
  template: `
    <div class="flex flex-col md:ml-20">
      @for (link of links(); track link.label) {
        <dl class="mt-2 flex text-gray md:mx-0 md:mt-4">
          <dt class="w-40 text-lg font-bold">{{ link.label }}</dt>
          <dd>
            <a [href]="link.url" class="cursor-pointer underline">{{ link.name }}</a>
          </dd>
        </dl>
      }
    </div>
  `,
})
export class LinksComponent {
  links = input.required<SocialLink[]>();
}
