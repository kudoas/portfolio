import { screen, render } from '@testing-library/angular';
import { TimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
  it('should create', async () => {
    const { fixture } = await render(TimelineComponent, { detectChangesOnRender: false });
    fixture.componentInstance.timelinesInput = [
      { id: 1, title: 'title', url: 'url', publishedAt: new Date(), kind: 'zenn' },
    ];
    fixture.detectChanges();

    expect(screen.getByText('title')).toBeTruthy();
  });
});
