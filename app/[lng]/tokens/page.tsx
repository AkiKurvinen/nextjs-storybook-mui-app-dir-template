'use client'
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { PrimaryPage } from '../../components/templates/PrimaryPage/PrimaryPage';
import { ThemeBar } from '../../components/organisms/ThemeBar/ThemeBar';
import { ColorGallery } from '../../../stories/ColorGallery';
import { FontGallery } from '../../../stories/FontGallery';

export interface iItems {
  [key: string]: number | string | undefined;
  Apples?: number;
  Bananas?: number;
  Oranges?: number;
}

export interface iResponse {
  items: iItems;
}

export default function Tokens(props: any) {
  return (
    <PrimaryPage
      nav={
        <ThemeBar {...props}>
          <Link href='/en' passHref>
            <Button color='secondary' variant='outlined'>
              Home
            </Button>
          </Link>
        </ThemeBar>
      }
      main={
        <Box
          sx={{
            paddingTop: '4em',
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
          }}
        >
          <Typography variant='h2' sx={{ textAlign: 'left' }}>
            Color palette
          </Typography>
          <ColorGallery />
          <Typography variant='h2' sx={{ textAlign: 'left', margin: '1em 0' }}>
            Typography
          </Typography>
          <FontGallery />
        </Box>
      }
    />
  );
}
