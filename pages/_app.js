import { useEffect } from 'react';
import '@/styles/main.css';
import '@/styles/chrome-bug.css';

import Layout from '@/components/Layout';
import { UserContextProvider } from '@/utils/useUser';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <div className="bg-primary">
      <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </div>
  );
}
