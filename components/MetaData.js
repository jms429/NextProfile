import Head from "next/head";
import useWindowLocation from "@hooks/useWindowLocation";

export default function MetaData({
  title,
  description,
  previewImage,
  keywords,
}) {
  const { currentURL } = useWindowLocation();

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description || "Jason Frederick"} />
      <title>{`${title || ""} Jason Frederick`}</title>
      <meta name="theme-color" content="#000" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="author" content="Jason Frederick"></meta>
      <meta name="robots" content="index,follow" />
      <meta
        name="keywords"
        content={`${keywords || ""} Jason, Jason Frederick`}
      />

      {/* Og */}
      <meta property="og:title" content={`${title || ""} Jason Frederick`} />
      <meta property="og:description" content={description || "Jason Frederick"} />
      <meta property="og:site_name" content="Jason Frederick" />
      <meta property="og:url" content={currentURL} key="ogurl" />
      <meta property="og:image" content={previewImage || ""} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@j471n_" />
      <meta name="twitter:title" content={`${title || ""} Jason Frederick`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={previewImage || ""} />
      <meta name="twitter:image:alt" content={title || "Jason Frederick"}></meta>
      <meta name="twitter:domain" content={currentURL} />
    </Head>
  );
}