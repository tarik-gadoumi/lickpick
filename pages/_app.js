import Layout from '../components/Layout';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
