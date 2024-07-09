import PageLayout from "@/components/layouts/layout";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
