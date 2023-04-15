import { render } from '@testing-library/react';

import SiteUi from './site-ui';

describe('SiteUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SiteUi />);
    expect(baseElement).toBeTruthy();
  });
});
