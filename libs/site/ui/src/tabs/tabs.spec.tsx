import { render } from '@testing-library/react';

import { Tabs } from '.';

describe('Tabs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tabs.Root />);
    expect(baseElement).toBeTruthy();
  });
});
