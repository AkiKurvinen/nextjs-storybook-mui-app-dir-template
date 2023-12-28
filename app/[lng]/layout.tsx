import './global.css'

import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider, THEME_ID, createTheme } from '@mui/material/styles';
import {Theme} from '@mui/material'
import {dark} from '../../themes/all_themes'
import MUIThemeProvider from '../helpers/MUIThemeProvider';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return ( 
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
      <MUIThemeProvider>{children}</MUIThemeProvider>
      </body>
    </html>
  )
}