import { render } from '@testing-library/react';

import { Dialog } from '.';

describe('Dialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog.Root />);
    expect(baseElement).toBeTruthy();
  });
});
