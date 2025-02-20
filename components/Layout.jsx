import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import { useLanguage } from '../context/LanguageContext';

const Layout = ({ children }) => {
  const { t } = useLanguage();
  
  return (
    <>
      <Head>
        <title>{t('Hitalker')}</title>
        <meta
          name="description"
          content={t('siteDescription')}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
