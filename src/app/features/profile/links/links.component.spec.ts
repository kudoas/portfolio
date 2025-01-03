import { screen, render } from '@testing-library/angular';
import { LinksComponent } from './links.component';

describe('LinksComponent', () => {
  it('should create', async () => {
    await render(LinksComponent, {
      inputs: {
        links: [{ label: 'GitHub', name: 'kudoas', url: `https://github.com/kudoas` }],
      },
    });

    expect(screen.getByText('GitHub')).toBeTruthy();
  });
});
