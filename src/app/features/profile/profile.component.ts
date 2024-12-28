import { Component } from '@angular/core';
import { LinksComponent } from './links/links.component';
import { Link } from './types';

@Component({
  selector: 'app-profile',
  imports: [LinksComponent],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  readonly links: Link[] = [
    { label: 'GitHub', id: 'kudoas', url: `https://github.com/kudoas` },
    { label: 'X (Twitter)', id: 'da1chi24', url: 'https://x.com/da1chi24' },
    { label: 'BlueSky', id: 'da1chi', url: 'https://bsky.app/profile/da1chi.bsky.social' },
    { label: 'Zenn', id: 'da1chi', url: 'https://zenn.dev/da1chi' },
    { label: 'Hatena Blog', id: 'da1chi24', url: 'https://da1chi.hatenablog.jp/' },
  ];
}
