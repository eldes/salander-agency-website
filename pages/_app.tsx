import { useRouter } from 'next/router';
import Layout from '../components/layout';
import '../styles/app.scss';
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const {asPath} = useRouter();
  const title = (() => {
    switch (asPath) {
      case '/': return 'About Us';
      case '/copyright': return 'About Copyright';
      case '/contact': return 'Contact';
      default: return 'About Us';
    }
  })();
  return (
    <Layout title={title} >
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
