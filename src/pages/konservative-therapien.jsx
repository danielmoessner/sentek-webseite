import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Indication from '../components/Indication';
import Container from '../components/Container';

function Page({ data }) {
  const page = data.pagesYaml;
  const therapies = data.therapies.nodes.map((node) => node.frontmatter);

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Header
        title={page.header.title}
        subtitle={page.header.text}
        sideImage={page.header.image.childImageSharp.gatsbyImageData}
      />
      <section className="bg-white">
        <Container>
          <div className="py-20 lg:px-4">
            <div className="grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
              {therapies.map((therapy) => (
                <div key={therapy.slug}>
                  <Link to={`/konservative-therapien/${therapy.slug}/`} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{therapy.title}</p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-3">{therapy.excerpt}</p>
                  </Link>
                  <div className="mt-3">
                    <Link
                      to={`/konservative-therapien/${therapy.slug}/`}
                      className="text-base font-semibold text-teal-600 hover:text-teal-500"
                    >
                      {page.content.button}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <Indication />
    </Layout>
  );
}

Page.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  {
    pagesYaml(slug: { eq: "therapies" }) {
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
      header {
        title
        text
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      content {
        button
      }
    }
    therapies: allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "therapy" } } }
      sort: { fields: frontmatter___order }
    ) {
      nodes {
        frontmatter {
          title
          excerpt
          slug
        }
      }
    }
  }
`;
