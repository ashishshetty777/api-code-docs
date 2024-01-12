import { Fragment, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  PhoneIcon,
  XMarkIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/solid';

export default function Accordion(props: any) {
  const setAccordion1 = () => {
    let element = document.getElementById('accordion-color-body-1');
    let hideelement1 = document.getElementById('accordion-color-body-2');
    let hideelement2 = document.getElementById('accordion-color-body-3');

    if (element) {
      element.classList.remove('hidden');
    }

    if (hideelement1) {
      hideelement1.classList.add('hidden');
    }

    if (hideelement2) {
      hideelement2.classList.add('hidden');
    }
  };

  const setAccordion2 = () => {
    let element = document.getElementById('accordion-color-body-2');
    let hideelement1 = document.getElementById('accordion-color-body-1');
    let hideelement2 = document.getElementById('accordion-color-body-3');

    if (element) {
      element.classList.remove('hidden');
    }

    if (hideelement1) {
      hideelement1.classList.add('hidden');
    }

    if (hideelement2) {
      hideelement2.classList.add('hidden');
    }
  };

  const setAccordion3 = () => {
    let element = document.getElementById('accordion-color-body-3');
    let hideelement1 = document.getElementById('accordion-color-body-1');
    let hideelement2 = document.getElementById('accordion-color-body-2');

    if (element) {
      element.classList.remove('hidden');
    }

    if (hideelement1) {
      hideelement1.classList.add('hidden');
    }

    if (hideelement2) {
      hideelement2.classList.add('hidden');
    }
  };

  useEffect(() => {
    setAccordion1();
  });

  return (
    <div
      id="accordion-color"
      data-accordion="collapse"
      data-active-classes="bg-blue-100"
    >
      <h2 id="accordion-color-heading-1" className="my-4">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right bg-gray-700 text-white  hover:bg-gray-600 gap-3 rounded-md"
          data-accordion-target="#accordion-color-body-1"
          aria-expanded="true"
          aria-controls="accordion-color-body-1"
          onClick={() => {
            setAccordion1();
          }}
        >
          <span>1. Step 1: Prepare the Input</span>
        </button>
      </h2>
      <div
        id="accordion-color-body-1"
        className="hidden"
        aria-labelledby="accordion-color-heading-1"
      >
        <div className="p-5 border bg-white">
          <p className="mb-2 text-gray-700">
            The two main components of the SkipTrace API input are the Name &
            Address.
          </p>
          <p className="mb-2 text-gray-700">
            The first_name and last_name fields are required. Be careful how
            your names are formatted, adding initials after the name or
            providing LLCs in the name fields significantly lowers your chances
            of an accurate match.
          </p>
          <p className="mb-2 text-gray-700">
            For the Address component of the input, you can provide either
            address, city, state, and zip fields together or mail_address,
            mail_city, mail_state, mail_zip together. You can provide both, but
            only 1 set of them is required in order to not get a 400 Bad Request
            error code
          </p>
          <button
            className="text-gray-400 flex items-center font-semibold"
            onClick={() => {
              setAccordion2();
            }}
          >
            <span className="mr-2">Next</span>
            <ArrowRightIcon className="w-6" />
          </button>
        </div>
      </div>
      <h2 id="accordion-color-heading-2" className="my-4">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right bg-gray-700 text-white  hover:bg-gray-600 gap-3 rounded-md"
          data-accordion-target="#accordion-color-body-2"
          aria-expanded="false"
          aria-controls="accordion-color-body-2"
          onClick={() => {
            setAccordion2();
          }}
        >
          <span>2. Step 2: Decide on Single or Bulk</span>
        </button>
      </h2>
      <div
        id="accordion-color-body-2"
        className="hidden"
        aria-labelledby="accordion-color-heading-2"
      >
        <div className="p-5 border border-b-0 bg-white">
          <p className="mb-2 text-gray-700">
            If you have more than one Name + Address combination, you can hit
            this endpoint repeatedly, but as your volume increases you may need
            to step up and use the Bulk SkipTrace API. But there is additional
            setup including setting up a webhook to receive responses, so this
            endpoint is less technically difficult to get up and running.
          </p>
          <button
            className="text-gray-400 flex items-center font-semibold"
            onClick={() => {
              setAccordion3();
            }}
          >
            <span className="mr-2">Next</span>
            <ArrowRightIcon className="w-6" />
          </button>
        </div>
      </div>
      <h2 id="accordion-color-heading-3" className="my-4">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right bg-gray-700 text-white  hover:bg-gray-600 gap-3 rounded-md"
          data-accordion-target="#accordion-color-body-3"
          aria-expanded="false"
          aria-controls="accordion-color-body-3"
          onClick={() => {
            setAccordion3();
          }}
        >
          <span>What's Next?</span>
        </button>
      </h2>
      <div
        id="accordion-color-body-3"
        className="hidden"
        aria-labelledby="accordion-color-heading-3"
      >
        <div className="p-5 border border-t-0 bg-white">
          <p className="mb-2 text-gray-700">
            Depending on the type of application you are building, you can do
            different things with the data from this endpoint's responses.
          </p>
          <p className="mb-2 text-gray-700">
            You can enrich contacts in your CRM, enrich list builder leads with
            phones and emails, and more.
          </p>
          <p className="mb-2 text-gray-700">
            The responses include phones and emails so they are perfect for B2C
            communications platforms or data enrichment platforms.
          </p>
          <p className="mb-2 text-gray-700">
            Social media profile links are provided when available. These are
            perfect for applications focusing on digital marketing and social
            media ad targeting.
          </p>
        </div>
      </div>
    </div>
  );
}
