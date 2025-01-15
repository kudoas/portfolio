import { render } from '@testing-library/angular';
import { TimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
  it('should create', async () => {
    await render(TimelineComponent, {
      inputs: {
        timelines: [{ id: 1, title: 'title', url: 'url', publishedAt: new Date(), kind: 'zenn' }],
      },
    });

    expect(TimelineComponent).toBeTruthy();
  });
});
