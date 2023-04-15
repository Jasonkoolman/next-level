import { render } from '@testing-library/react';

import { DropdownMenu } from '.';

describe('DropdownMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DropdownMenu.Root />);
    expect(baseElement).toBeTruthy();
  });
});
