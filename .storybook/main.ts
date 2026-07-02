import type { StorybookConfig } from '@storybook/react-webpack5';
import sass from 'sass'; 

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.module\.(css|scss|sass)$/i,
            use: [
              'style-loader',
              //'css-loader',
              {
                loader: 'css-loader',
                options: {
                  esModule: false,
                  modules: {
                    mode: 'local',
                    localIdentName: '[name]__[local]--[hash:base64:5]',
                  },
                },
              },
              {
                loader: 'sass-loader',
                options: { implementation: sass },
              },
            ],
          },
        ],
      },
    },
  ],
  "framework": "@storybook/react-webpack5"
};
export default config;