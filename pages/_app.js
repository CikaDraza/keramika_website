import '../styles/globals.scss';
import LayoutPage from '../src/LayoutPage';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <LayoutPage>
      <Component {...pageProps} />
      <Analytics />
    </LayoutPage>
  )
}

export default MyApp;
