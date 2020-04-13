import { themes, create } from '@storybook/theming';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';

const basicTheme = create({
  base: 'light',
  brandTitle: 'README addon',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null,
});

addParameters({
  options: {
    showPanel: false,
    panelPosition: 'right',
    theme: basicTheme,
  }
})

addDecorator(addReadme);

