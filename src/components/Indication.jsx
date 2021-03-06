import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Transition } from '@headlessui/react';

function Component() {
  const [open, setOpen] = useState(false);

  const data = useStaticQuery(graphql`
    {
      settingsYaml(slug: { eq: "indication" }) {
        title
        text
      }
    }
  `);
  const indication = data.settingsYaml;

  return (
    <aside>
      <div className="fixed right-0 z-50 top-[25vh] lg:top-[15vh]">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="bg-gray-900 text-gray-050 p-3 w-12 rounded-l-full cursor-pointer hover:bg-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <Transition
          show={open}
          className="absolute right-0 w-80"
          enter="transform duration-75"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform duration-150"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="bg-gray-050 text-gray-900 rounded-l-lg">
            <div className="p-4">
              <h2 className="text-lg font-medium">{indication.title}</h2>
              <p className="mt-2">{indication.text}</p>
            </div>
          </div>
        </Transition>
      </div>
    </aside>
  );
}

Component.defaultProps = {};

Component.propTypes = {};

export default Component;
