import type { Preview } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import "../src/App.styles.scss";

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
        <Story />
      </Provider>
    ),
  ],
};

export default preview;