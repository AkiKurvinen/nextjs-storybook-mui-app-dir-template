import { PrimaryPage } from '../components/templates/PrimaryPage/PrimaryPage';
import { languages, fallbackLng } from '../i18n/settings';
import { useTranslation } from '../i18n';
import { StockPanelController } from '../components/organisms/StockPanel/StockPanelController';
import { Footer } from '../components/organisms/Footer/Footer';
import { WeatherWidget } from '../components/organisms/WeatherWidget/WeatherWidget';
import { NavController } from '../components/organisms/Nav/NavController';
import { ThemeBar } from '../components/organisms/ThemeBar/ThemeBar';

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return { title: t('index.title') };
}

export default async function Page({ params: { lng, ...props } }) {
  // const [admin, setAdmin] = useState(false);

  if (languages.indexOf(lng) < 0) lng = fallbackLng;

  return (
    <PrimaryPage
      nav={
        <>
          <NavController lng={lng} path={'/'} {...props} />
          <ThemeBar />
        </>
      }
      main={<StockPanelController admin={false} lng={lng} path={'/'} />}
      footer={
        <Footer>
          <WeatherWidget />
        </Footer>
      }
    />
  );
}
