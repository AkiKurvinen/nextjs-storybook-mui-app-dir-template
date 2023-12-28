import './global.css'

import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

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
      <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}
