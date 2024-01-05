'use client';

import Pear from '../../../../public/img/svg/pear.svg';
import Link from 'next/link';
import { useMediaQuery, useTheme } from '@mui/material';
import { languages, fallbackLng } from '../../../i18n/settings';

import { useState } from 'react';
import { Nav } from './Nav';
import { LangNav } from '../LangNav/LangNav';
import { useTranslation } from '../../../i18n/client';
import { SearchForm } from '../../molecules/SearchForm/SearchForm';
export const NavController = (props: any) => {
  const [keywords, setKeywords] = useState('');
  const theme = useTheme();
  const { t } = useTranslation(props.lng, 'nav');
  const isExtraSmallSize = useMediaQuery(theme.breakpoints.down('sm'));

  const handleKeywords = (event: any) => {
    setKeywords(event.target.value);
  };

  const handleSearch = () => {
    alert(keywords);
  };

  return (
    <Nav
      logo={
        <Link href='/'>
          <Pear />
          {t('fruity-oy')}
        </Link>
      }
      search={
        <SearchForm
          onlyicon={isExtraSmallSize}
          handleSearch={handleSearch}
          handleKeywords={handleKeywords}
          buttonlabel={t('search')}
          textfieldlabel={t('keywords')}
        />
      }
    >
      <LangNav {...props} />
      <Link href={`/${props.lng}/`}>{t('stock')}</Link>
      <Link href={`/${props.lng}/admin`}>{t('admin')}</Link>
      <Link href={`/tokens`}>{t('tokens')}</Link>
      <Link href='/storybook'>Storybook</Link>
    </Nav>
  );
};
