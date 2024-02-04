import PageLayout from '@/components/PageLayout';
import '@/styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />

      <SpeedInsights />
    </PageLayout>
  );
}
