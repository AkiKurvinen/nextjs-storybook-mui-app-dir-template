'use client';
import { Footer } from '../../components/organisms/Footer/Footer';
import { NavController } from '../../components/organisms/Nav/NavController';
import { StockPanelController } from '../../components/organisms/StockPanel/StockPanelController';
import { ThemeBar } from '../../components/organisms/ThemeBar/ThemeBar';
import { WeatherWidget } from '../../components/organisms/WeatherWidget/WeatherWidget';
import { PrimaryPage } from '../../components/templates/PrimaryPage/PrimaryPage';
import { useTranslation } from '../../i18n/client';
import { useState } from 'react';
export default function About({ ...props }) {
  const { t } = useTranslation(props.lng, 'client-page');
  const [counter, setCounter] = useState(0);

  return (
    <PrimaryPage
      nav={
        <>
          <NavController lng={props.lng} path={'/'} {...props} />
          <ThemeBar />
        </>
      }
      main={<StockPanelController admin={true} lng={props.lng} path={'/'} />}
      footer={
        <Footer>
          <WeatherWidget />
        </Footer>
      }
    />
  );
}
