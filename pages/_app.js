import '../styles/globals.scss';
import LayoutPage from '../src/LayoutPage';

function MyApp({ Component, pageProps }) {
  return (
    <LayoutPage>
      <Component {...pageProps} />
    </LayoutPage>
  )
}

export default MyApp;
