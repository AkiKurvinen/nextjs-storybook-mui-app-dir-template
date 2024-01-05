export const allModes = {
  // theme
  light: {
    backgrounds: 'light',
    theme: 'light',
  },
  dark: {
    backgrounds: 'dark',
    theme: 'dark',
  },

  // locale
  en: {
    locale: 'en',
  },
  fi: {
    locale: 'fi',
  },

  // theme + device
  'light desktop': {
    viewport: 'desktop',
    backgrounds: 'light',
    theme: 'light',
  },
  'light mobile': {
    viewport: 'mobile',
    backgrounds: 'light',
    theme: 'light',
  },
  'dark desktop': {
    viewport: 'desktop',
    backgrounds: 'dark',
    theme: 'dark',
  },
  'dark mobile': {
    viewport: 'mobile',
    backgrounds: 'dark',
    theme: 'dark',
  },

  // theme + device + locale
  'light mobile en': {
    viewport: 'mobile',
    backgrounds: 'light',
    theme: 'light',
    locale: 'en',
  },
  'dark desktop fi': {
    viewport: 'desktop',
    backgrounds: 'dark',
    theme: 'dark',
    locale: 'fi',
  },

};

// Chromatic Story Modes snap shot test matrix presets
export const chromaticThemeModes = {
  light: allModes['light'],
  dark: allModes['dark'],
};

export const chromaticThemeDeviceModes = {
  light_desktop: allModes['light desktop'],
  light_mobile: allModes['light mobile'],
  dark_desktop: allModes['dark desktop'],
  dark_mobile: allModes['dark mobile'],
  // disable top level modes set in preview.ts
  light: { disable: true },
  dark: { disable: true },
};

export const chromaticLanguageModes = {
  english: allModes['en'],
  finnish: allModes['fi'],
};

export const chromaticThemeDeviceLangModes = {
  light_mobile_english: allModes['light mobile en'],
  dark_desktop_finnish: allModes['dark desktop fi'],
}