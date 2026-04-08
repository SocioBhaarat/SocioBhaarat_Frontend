import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, url }) => {
  const baseUrl = "https://www.sociobhaarat.com";
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={`${baseUrl}${url}`} />

      {/* Open Graph (for social sharing) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${baseUrl}${url}`} />
      <meta name="robots" content="index, follow" />

    </Helmet>
  );
};

export default SEO;