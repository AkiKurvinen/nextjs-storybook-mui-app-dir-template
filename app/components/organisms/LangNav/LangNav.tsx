import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { MenuItem, Select, Theme, Typography } from '@mui/material';
import { FC } from 'react';
import styled from '@emotion/styled';
import { languages } from '../../../i18n/settings';

interface LangNavProps {
  logo?: React.ReactNode;
  children?: React.ReactNode;
  search?: React.ReactNode;
  name?: string;
  theme?: Theme;
  t: any;
  lng: any;
  path: string;
}
const StyledLangNav: FC<LangNavProps> = ({ ...props }: LangNavProps) => {
  return (
    <span {...props}>
      <Trans i18nKey='languageSwitcher' t={props.t}>
        <span key='selected'>
          {' '}
          <strong>{props.lng}</strong>
        </span>
      </Trans>
      {languages
        .filter((l) => props.lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0}
              <Link href={`/${l}${props.path}`}>{l}</Link>
            </span>
          );
        })}
    </span>
  );
};

export const LangNav = styled(StyledLangNav)`
  color: ${(props) => props.theme.palette.background.paper};
  span:last-child {
    border-right: solid thin ${(props) => props.theme.palette.background.paper};
  }
  span {
    color: ${(props) => props.theme.palette.primary.contrastText};
  }
  span:hover {
    text-decoration: underline;
    background-color: transparent;
    cursor: pointer;
  }
  span a {
    margin: 0 0.5em;
  }
  ${(props) => props.theme.breakpoints.down('md')} {
    span a{
      margin: 0;
    }
    span{
      padding-left: 1em;
    }
    span:last-child{
      border: none;
    }
  }
`;
