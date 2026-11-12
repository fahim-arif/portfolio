import Head from "next/head";
import { useRouter } from "next/router";
import { PROFILE } from "@/content/profile";

// TODO: set to the deployed origin, e.g. "https://example.com" (no trailing
// slash). Open Graph needs absolute URLs, so og:url and og:image are only
// emitted once this is set.
export const SITE_URL = "";

export const DEFAULT_TITLE = `${PROFILE.name} | ${PROFILE.title}`;
export const DEFAULT_DESCRIPTION = `${PROFILE.name} is a ${PROFILE.title.toLowerCase()} (${PROFILE.stack}) with 7+ years of fully remote experience, including 3 years on a large video streaming platform. Based in ${PROFILE.location}.`;

interface IProps {
  title?: string;
  description?: string;
  imagePath?: string;
}

export const HtmlHead = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  imagePath = "/images/fahim.jpg",
}: IProps): JSX.Element => {
  const { asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0];
  const url = SITE_URL ? `${SITE_URL}${path === "/" ? "" : path}` : "";
  const image = SITE_URL ? `${SITE_URL}${imagePath}` : "";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={PROFILE.name} />
      {url && <link rel="canonical" href={url} />}

      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content={PROFILE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:alt" content={`Portrait of ${PROFILE.name}`} />}

      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      <meta name="robots" content="index, follow" />
    </Head>
  );
};
