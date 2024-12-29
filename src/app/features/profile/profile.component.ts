import { Component } from '@angular/core';
import { LinksComponent } from './links/links.component';
import { Link } from './types';

@Component({
  selector: 'app-profile',
  imports: [LinksComponent],
  template: `
    <main class="md:mx-40 font-mono">
      <section>
        <h1 class="text-center mt-10 mb-5 font-bold text-3xl tracking-wide whitespace-nowrap">
          About Me
        </h1>
        <div class="flex flex-col items-center md:flex-row justify-center">
          <div class="flex flex-col items-center min-w-[220px] min-h-[208px]">
            <img
              src="icon.png"
              alt="icon"
              class="w-52 aspect-square rounded-full border border-solid border-gray-300"
            />
            <p class="md:mb-0 mt-4 mb-1 text-lg font-bold text-center">da1chi<br />(Daichi Kudo)</p>
          </div>
          <app-profile-links [links]="links" />
        </div>
      </section>
    </main>
  `,
})
export class ProfileComponent {
  readonly links: Link[] = [
    { label: 'GitHub', id: 'kudoas', url: `https://github.com/kudoas` },
    { label: 'X (Twitter)', id: 'da1chi24', url: 'https://x.com/da1chi24' },
    { label: 'Bluesky', id: 'da1chi', url: 'https://bsky.app/profile/da1chi.bsky.social' },
    { label: 'Zenn', id: 'da1chi', url: 'https://zenn.dev/da1chi' },
    { label: 'Hatena Blog', id: '/var/log/da1', url: 'https://da1chi.hatenablog.jp/' },
    { label: 'Consence', id: '液溜まり', url: 'https://scrapbox.io/da1chi-tech/' },
  ];
}
