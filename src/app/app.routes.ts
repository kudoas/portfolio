import { Routes } from '@angular/router';
import { ProfileComponent } from './features/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
