'use client';

import Pear from '../../../../public/img/svg/pear.svg';
import Link from 'next/link';
import { useMediaQuery, useTheme } from '@mui/material';

import { useState } from 'react';
import { Nav } from './Nav';
import { LangNav } from '../LangNav/LangNav';
export const NavController = (props: any) => {
  const [keywords, setKeywords] = useState('');
  const theme = useTheme();

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
        <Link href={{ pathname: 'nav.index.route', query: 'query' }}>
          <Pear />
          Fruity Oy
        </Link>
      }
      search={
        <p>search</p>
        /*     <SearchForm
          onlyicon={isExtraSmallSize}
          handleSearch={handleSearch}
          handleKeywords={handleKeywords}
          buttonlabel={'search.search'}
          textfieldlabel={'search.keywords'}
      />*/
      }
    >
      <LangNav {...props} />
      <Link href={{ pathname: 'nav.stock.route', query: 'query' }}>
        'nav.stock.text'
      </Link>
      <Link href={{ pathname: 'nav.admin.route', query: 'query' }}>
        'nav.admin.text'
      </Link>
      <Link href={{ pathname: 'nav.tokens.route', query: 'query' }}>
        {'nav.tokens.text'}
      </Link>
      <Link href='/storybook'>Storybook</Link>
    </Nav>
  );
};
