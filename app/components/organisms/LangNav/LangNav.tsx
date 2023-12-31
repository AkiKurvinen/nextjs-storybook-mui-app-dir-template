import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
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
  t:any
  lng:any
  path: string
}
const StyledLangNav: FC<LangNavProps> = ({ ...props }: LangNavProps) => {
  console.log(props)
  return (
    <span {...props}>
      <Trans i18nKey="languageSwitcher" t={props.t}>
        Switch from <strong>{ props.lng }</strong> to:{' '}
      </Trans>
      {languages.filter((l) => props.lng !== l).map((l, index) => {
        return (
          <span key={l}>
            {index > 0}
            <Link href={`/${l}${props.path}`}>
              {l}
            </Link>
          </span>
        )
      })}


    </span>
  );
};

export const LangNav = styled(StyledLangNav)`
  color: ${(props) => props.theme.palette.background.paper};
  span {
    color: ${(props) => props.theme.palette.primary.contrastText};
    margin: 0 0.5em;
  }
  span:hover {
    text-decoration: underline;
    background-color: transparent;
    cursor: pointer;
  }
`;
