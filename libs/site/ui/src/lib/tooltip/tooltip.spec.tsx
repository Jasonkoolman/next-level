import Tooltip from './tooltip';
import { render } from '@testing-library/react';

describe('Tooltip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tooltip />);
    expect(baseElement).toBeTruthy();
  });
});
