import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { LanguageProvider } from '../context/LanguageContext';

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}
