import React from 'react';
import { Button } from '@storybook/react/demo';

export default { title: 'Button' };
import '../styles.css';
export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <button className="px-5 py-2 hover:bg-blue-500 bg-black rounded">
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </button>
);