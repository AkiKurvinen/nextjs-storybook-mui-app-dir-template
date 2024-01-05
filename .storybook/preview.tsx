import { Preview, ReactRenderer } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { light, dark, muiDefault, muiGold } from '../themes/all_themes';
import { chromaticThemeModes } from './modes';

import React, { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../app/i18n/i18n';

const i18nextStoryDecorator = (Story, context) => {
  const { locale } = context.globals;

  // When the locale global changes
  // Set the new locale in i18n
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    // here catches the suspense from components not yet ready (still loading translations)
    // alternative set useSuspense false on i18next.options.react when initializing i18next
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      title: 'Locale',
      dynamicTitle: true,
      icon: 'globe',
      items: [
        { value: 'en', right: '🇬🇧', title: 'English' },
        { value: 'fi', right: '🇫🇮', title: 'Finnish' },
      ],
      showName: true,
    },
  },
};
i18n.on('languageChanged', (locale) => {
  const direction = i18n.dir(locale);
  document.dir = direction;
});

export const decorators = [
  i18nextStoryDecorator,
  withThemeFromJSXProvider<ReactRenderer>({
    themes: {
      light: light,
      dark: dark,
      muiDefault: muiDefault,
      muiGold: muiGold,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

const preview: Preview = {
  globalTypes: {
    ...globalTypes,
    is_chromatic: { value: false },
  },
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        desktop: {
          name: 'desktop',
          styles: { width: '1920px'},
        },
        mobile: { name: 'mobile', styles: { width: '360px' } }, // Viewport width range [200, 2560]
        defaultViewport: 'responsive',
      },
    },
    chromatic: {
      modes: chromaticThemeModes,
      diffThreshold: 0.063, // default 0.063
    },
    actions: { argTypesRegex: '^on[A-Z].*' },

    backgrounds: {
      values: [
        {
          name: 'light',
          value: light.palette.background.paper,
        },
        {
          name: 'dark',
          value: dark.palette.background.paper,
        },
        {
          name: 'muiGold',
          value: muiGold.palette.background.paper,
        },
        {
          name: 'muiDefault',
          value: muiDefault.palette.background.paper,
        },
      ],
    },
    decorators: decorators,
  },
};

export default preview;
