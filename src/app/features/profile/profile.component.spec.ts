import { ProfileComponent } from './profile.component';
import { render } from '@testing-library/angular';
import { provideProfileUsecase } from './usecase';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ProfileComponent', () => {
  it('should create', async () => {
    await render(ProfileComponent, {
      providers: [provideHttpClient(), provideHttpClientTesting(), provideProfileUsecase()],
    });
    expect(ProfileComponent).toBeTruthy();
  });
});
