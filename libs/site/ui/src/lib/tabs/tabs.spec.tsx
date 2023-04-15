import Tabs from './tabs';
import { render } from '@testing-library/react';

describe('Tabs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tabs />);
    expect(baseElement).toBeTruthy();
  });
});
