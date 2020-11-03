import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('make sure I get my answer', () => {
   const { debug } = render(<App />);

   debug();
});
