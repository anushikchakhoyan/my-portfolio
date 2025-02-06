import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

interface PageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{data.site.siteMetadata.title}</p>
    </div>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
