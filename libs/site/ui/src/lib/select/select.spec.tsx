import Select from './select';
import { render } from '@testing-library/react';

describe('Select', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Select />);
    expect(baseElement).toBeTruthy();
  });
});
