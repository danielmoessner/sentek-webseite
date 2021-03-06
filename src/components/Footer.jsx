import React from 'react';
// import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
// import { Transition } from '@headlessui/react';
import Logo from './LogoSvg';

function Component() {
  const data = useStaticQuery(graphql`
    {
      operations: allMarkdownRemark(
        filter: { frontmatter: { collection: { eq: "operation" } } }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
      illnesses: allMarkdownRemark(
        filter: { frontmatter: { collection: { eq: "illness" } } }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
      contact: settingsYaml(slug: { eq: "contact" }) {
        phone
        email
      }
      footer: settingsYaml(slug: { eq: "footer" }) {
        text
        column1
        column2
        column3
        column4
        link11
        link12
        link13
        link14
        link15
        link16
        link14
        link41
        link42
      }
    }
  `);
  const illnessLinks = data.illnesses.nodes.map((node) => node.frontmatter);
  const operationLinks = data.operations.nodes.map((node) => node.frontmatter);
  const { contact, footer } = data;

  return (
    <footer className="bg-gray-50 shadow-inner" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:pt-16 lg:pb-20 lg:px-6">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1 text-teal-900">
            <div className="max-w-lg">
              <Logo />
            </div>
            <p className="text-gray-500 text-base">{footer.text}</p>
            <div className="flex flex-col space-y-3">
              <div className="flex flex-row items-center">
                <svg
                  className="w-6 h-6 text-teal-800 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  className="text-base font-medium text-gray-600 hover:text-teal-800"
                  href={`tel:${contact.phone}`}
                >
                  {contact.phone}
                </a>
              </div>
              <div className="flex flex-row items-center">
                <svg
                  className="w-6 h-6 text-teal-800 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  className="text-base font-medium text-gray-600 hover:text-teal-800"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  {footer.column1}
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/" className="text-base text-gray-500 hover:text-gray-900">
                      {footer.link11}
                    </Link>
                  </li>
                  <li>
                    <Link to="/team/" className="text-base text-gray-500 hover:text-gray-900">
                      {footer.link12}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/krankheitsbilder/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {footer.link13}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/operationen/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {footer.link14}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/konservative-therapien/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {footer.link15}
                    </Link>
                  </li>
                  <li>
                    <Link to="/kontakt/" className="text-base text-gray-500 hover:text-gray-900">
                      {footer.link16}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  {footer.column2}
                </h3>
                <ul className="mt-4 space-y-4">
                  {illnessLinks.map((link) => (
                    <li key={link.slug}>
                      <Link
                        to={`/krankheitsbilder/${link.slug}`}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  {footer.column3}
                </h3>
                <ul className="mt-4 space-y-4">
                  {operationLinks.map((link) => (
                    <li key={link.slug}>
                      <Link
                        to={`/operationen/${link.slug}`}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  {footer.column4}
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/impressum/" className="text-base text-gray-500 hover:text-gray-900">
                      {footer.link41}
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/datenschutz/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {footer.link42}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Component.defaultProps = {};

Component.propTypes = {};

export default Component;
