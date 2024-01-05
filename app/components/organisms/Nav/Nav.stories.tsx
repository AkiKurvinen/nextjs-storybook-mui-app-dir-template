import type { Meta, StoryObj } from '@storybook/react';
import { Nav } from './Nav';
import { Link } from '@mui/material';
import Pear from '../../../../public/img/svg/pear.svg';
import { useTranslation } from '../../../i18n/client';
import { chromaticThemeDeviceModes } from '../../../../.storybook/modes';
const meta: Meta<typeof Nav> = {
  parameters: {
    layout: 'fullscreen',
    chromatic: { modes: chromaticThemeDeviceModes },
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/XcEEa8xxSoDs7sANZKmZTV/TemplateDesignSystem?type=design&node-id=48-1460',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  },
  title: 'Components/Organisms/Nav',
  component: Nav,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Nav>;
export const Default: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    logo: (
      <a href='#'>
        <Pear />
        Fruity Oy
      </a>
    ),
    name: 'Fruity Oy',
    children: [
      <Link key='1' href='/stock'>
        stock
      </Link>,
      <Link key='2' href='/about'>
        about
      </Link>,
      <Link key='3' href='/contact'>
        contact
      </Link>,
    ],
  },
};

export const WithTranslation: Story = {

  render: () => {
    const { t } = useTranslation(undefined, 'nav');
    return (
      <Nav
        logo={
          <a href='#'>
            <Pear />
            {t('fruity-oy')}
          </a>
        }
        name='Fruity Oy'
        children={[
          <Link key='1' href='/stock'>
            {t('stock')}
          </Link>,
          <Link key='2' href='/about'>
            {t('admin')}
          </Link>,
          <Link key='3' href='/contact'>
            {t('tokens')}
          </Link>,
        ]}
      />
    );
  },
};
