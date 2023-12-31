import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider, THEME_ID, createTheme } from '@mui/material/styles';
import { Theme } from '@mui/material';
import { dark } from '../../themes/all_themes';
import MUIThemeProvider from '../helpers/MUIThemeProvider';
import PageProvider from '../helpers/PageProvider';

import { Raleway } from 'next/font/google';
import { Component } from 'react';
const raleway = Raleway({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
 params:{lng},  children
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        {/* PWA primary color */}
        <link
          rel='shortcut icon'
          href={`${
            process.env.NEXT_PUBLIC_BASE_PATH &&
            process.env.NEXT_PUBLIC_BASE_PATH
          }/img/svg/pear.svg`}
        />
        <meta name='emotion-insertion-point' content='' />
        <link
          rel='preload'
          href='https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&display=swap'
        />

      </head>
      <body>
        <div className={raleway.className}>
          <PageProvider>{children}</PageProvider>
        </div>
      </body>
    </html>
  );
}
