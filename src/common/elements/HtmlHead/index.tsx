import Head from "next/head";

interface IProps {
  title: string;
  content: string;
  imageUrl?: string; // Consider adding an image URL for visual representation on social platforms.
}

export const HtmlHead = ({
  title,
  content,
  imageUrl = "/images/default-bg.jpg",
}: IProps): JSX.Element => {
  return (
    <Head>
      <meta name="description" content={content} />
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <meta httpEquiv="content-language" content="en-us" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={content} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content="https://novawork.io/" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={content} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional meta tags for better SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Head>
  );
};
