import type { Preview } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../src/app';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <style>
          {
            `
              * {
                text-decoration: none;
                color: white;
              }

              body {
                background-color: black;
              }
            `
          }
        </style>
        <Story />
      </Provider>
    ),
  ],
};

export default preview;