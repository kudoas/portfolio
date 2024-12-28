import { ProfileComponent } from './profile.component';
import { render } from '@testing-library/angular';

describe('ProfileComponent', () => {
  it('should create', async () => {
    await render(ProfileComponent);
    expect(ProfileComponent).toBeTruthy();
  });
});
