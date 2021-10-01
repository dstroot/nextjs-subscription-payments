import Script from 'next/script';
import '@/styles/main.css';
import '@/styles/chrome-bug.css';

import Layout from '@/components/Layout';
import { UserContextProvider } from '@/utils/useUser';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-primary">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="ga-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
      </Script>
      <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </div>
  );
}
