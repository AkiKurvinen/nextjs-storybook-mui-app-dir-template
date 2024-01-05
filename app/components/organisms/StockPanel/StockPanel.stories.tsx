import type { Meta, StoryObj } from '@storybook/react';
import { StockPanelView, StockPanelSkeleton } from './StockPanelView';
import * as React from 'react';
import { chromaticThemeDeviceLangModes } from '../../../../.storybook/modes';
import { stock_mock_data } from './mock_data';
import { useTranslation } from '../../../i18n/client';

const meta: Meta<typeof StockPanelView> = {
  title: 'Components/Organisms/StockPanel',
  component: StockPanelView,
  tags: ['autodocs'],
  parameters: {
    chromatic: { modes: chromaticThemeDeviceLangModes },
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/XcEEa8xxSoDs7sANZKmZTV/TemplateDesignSystem?type=design&node-id=48-1460',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  },
  argTypes: {
    admin: {
      control: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof StockPanelView>;

export const Deault: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    data: stock_mock_data,
    currentItem: 'Apples',
    currentImage: 'apples',
  },
};

export const WithTranslation: Story = {
  render: () => {
    const { t } = useTranslation(undefined, 'stockpanel');
    return (
      <StockPanelView
      currentItem={'Apples'}
      currentImage='apples'
      data={stock_mock_data}
      listheadline={t('listheadline')}
      previewheadline={t('previewheadline')}
      setcurrentitem={()=>{}}

      />
    );
  },
};

export const Loading: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => <StockPanelSkeleton />,
};
