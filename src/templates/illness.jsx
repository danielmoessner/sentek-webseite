import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Article from '../components/Article';
import Header from '../components/Header';

function Page({ data }) {
  const illness = { html: data.markdownRemark.html, ...data.markdownRemark.frontmatter };
  // const page = data.pagesYaml;

  return (
    <Layout>
      <Seo
        title={illness.meta.title}
        description={illness.meta.description}
        image={illness.meta.image.childImageSharp.resize.src}
      />
      <Header
        title={illness.title}
        subtitle={illness.excerpt}
        sideImage={illness.image.childImageSharp.gatsbyImageData}
      />
      <Article html={illness.html} />
    </Layout>
  );
}

Page.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  query ($slug: String!) {
    pagesYaml(slug: { eq: "illness" }) {
      pretitle
    }
    markdownRemark(frontmatter: { collection: { eq: "illness" }, slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        meta {
          image {
            childImageSharp {
              resize(width: 1200) {
                src
              }
            }
          }
          description
          title
        }
        title
        excerpt
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
