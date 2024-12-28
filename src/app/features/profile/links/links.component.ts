import { Component, input } from '@angular/core';
import { Link } from '../types';

@Component({
  selector: 'app-profile-links',
  imports: [],
  templateUrl: './links.component.html',
})
export class LinksComponent {
  links = input.required<Link[]>();
}
