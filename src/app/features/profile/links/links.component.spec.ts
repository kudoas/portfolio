import { screen, render } from '@testing-library/angular';
import { LinksComponent } from './links.component';

describe('LinksComponent', () => {
  it('should create', async () => {
    const { fixture } = await render(LinksComponent, { detectChangesOnRender: false });
    fixture.componentInstance.linksInput = [
      { label: 'GitHub', name: 'kudoas', url: `https://github.com/kudoas` },
    ];
    fixture.detectChanges();

    expect(screen.getByText('GitHub')).toBeTruthy();
  });
});
