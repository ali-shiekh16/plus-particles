import "@fontsource/lora";
import Layout from "../components/Layout/Layout";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
