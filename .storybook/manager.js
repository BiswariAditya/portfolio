import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './android_icon.png',
    brandTitle: 'Aditya Biswari Gupta Portfolio',
    brandUrl: 'https://biswariaditya.github.io',
  },
});
