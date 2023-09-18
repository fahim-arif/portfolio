import Head from "next/head";

interface IProps {
  title: string;
  content: string;
}

export const HtmlHead = ({ title, content }: IProps): JSX.Element => {
  return (
    <Head>
      <meta name="description" content={content} />
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <meta httpEquiv="content-language" content="en-us" />
    </Head>
  );
};
