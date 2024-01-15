import { Fragment, useEffect, useRef, useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function SecondAccordion(props: any) {
  const accordionHandler = (number: number) => {
    let element1 = document.getElementById('accordion-color-body-1');
    let element2 = document.getElementById('accordion-color-body-2');
    let element3 = document.getElementById('accordion-color-body-3');
    let element4 = document.getElementById('accordion-color-body-4');
    let element5 = document.getElementById('accordion-color-body-5');

    if (number === 1) {
      element1 && element1.classList.remove('hidden');
      element2 && element2.classList.add('hidden');
      element3 && element3.classList.add('hidden');
      element4 && element4.classList.add('hidden');
      element5 && element5.classList.add('hidden');
    }

    if (number === 2) {
      element1 && element1.classList.add('hidden');
      element2 && element2.classList.remove('hidden');
      element3 && element3.classList.add('hidden');
      element4 && element4.classList.add('hidden');
      element5 && element5.classList.add('hidden');
    }

    if (number === 3) {
      element1 && element1.classList.add('hidden');
      element2 && element2.classList.add('hidden');
      element3 && element3.classList.remove('hidden');
      element4 && element4.classList.add('hidden');
      element5 && element5.classList.add('hidden');
    }

    if (number === 4) {
      element1 && element1.classList.add('hidden');
      element2 && element2.classList.add('hidden');
      element3 && element3.classList.add('hidden');
      element4 && element4.classList.remove('hidden');
      element5 && element5.classList.add('hidden');
    }

    if (number === 5) {
      element1 && element1.classList.add('hidden');
      element2 && element2.classList.add('hidden');
      element3 && element3.classList.add('hidden');
      element4 && element4.classList.add('hidden');
      element5 && element5.classList.remove('hidden');
    }
  };

  useEffect(() => {
    accordionHandler(1);
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
            accordionHandler(1);
          }}
        >
          <span>1. Step 0: Configure Headers</span>
        </button>
      </h2>
      <div
        id="accordion-color-body-1"
        className="hidden"
        aria-labelledby="accordion-color-heading-1"
      >
        <div className="p-5 border bg-white">
          <p className="mb-2 text-gray-700">
            Use your RealEstateAPI key to make calls to the Property Search API.
          </p>
          <p className="mb-2 text-gray-700">
            You can include an &apos;x-user-id&apos; field that will allow you
            separate actions from your app user-by-user
          </p>
          <button
            className="text-gray-400 flex items-center font-semibold"
            onClick={() => {
              accordionHandler(2);
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
            accordionHandler(2);
          }}
        >
          <span>2. Step 1: Figure Out Your Target Geo for the Search</span>
        </button>
      </h2>
      <div
        id="accordion-color-body-2"
        className="hidden"
        aria-labelledby="accordion-color-heading-2"
      >
        <div className="p-5 border border-b-0 bg-white">
          <p className="mb-2 text-gray-700">
            Narrow down your search to a certain county or city before adding
            the next layer of filtering for the types of properties you want to
            find
          </p>
          <button
            className="text-gray-400 flex items-center font-semibold"
            onClick={() => {
              accordionHandler(3);
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
            accordionHandler(3);
          }}
        >
          <span>3. Step 2: Choose Your Combination of Property Filters</span>
        </button>
      </h2>
      <div
        id="accordion-color-body-3"
        className="hidden"
        aria-labelledby="accordion-color-heading-3"
      >
        <div className="p-5 border border-b-0 bg-white">
          <p className="mb-2 text-gray-700">
            You can mix and match the filters however you see fit, but the more
            you select to be &apos;true&apos;, the less results you are likely
            to get back.
          </p>
          <button
            className="text-gray-400 flex items-center font-semibold"
            onClick={() => {
              accordionHandler(4);
            }}
          >
            <span className="mr-2">Next</span>
            <ArrowRightIcon className="w-6" />
          </button>
        </div>
      </div>
      <h2 id="accordion-color-heading-4" className="my-4">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right bg-gray-700 text-white  hover:bg-gray-600 gap-3 rounded-md"
          data-accordion-target="#accordion-color-body-4"
          aria-expanded="false"
          aria-controls="accordion-color-body-4"
          onClick={() => {
            accordionHandler(4);
          }}
        >
          <span>4. Step 3: Perform the Property Search</span>
        </button>
      </h2>
      <div
        id="accordion-color-body-4"
        className="hidden"
        aria-labelledby="accordion-color-heading-4"
      >
        <div className="p-5 border border-b-0 bg-white">
          <p className="mb-2 text-gray-700">
            Now that we know what Geo we are targeting and what property
            characteristics to look for in that area, we just need to provide
            that data to the Property Search API endpoint.
          </p>
          <button
            className="text-gray-400 flex items-center font-semibold"
            onClick={() => {
              accordionHandler(5);
            }}
          >
            <span className="mr-2">Next</span>
            <ArrowRightIcon className="w-6" />
          </button>
        </div>
      </div>
      <h2 id="accordion-color-heading-5" className="my-4">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right bg-gray-700 text-white  hover:bg-gray-600 gap-3 rounded-md"
          data-accordion-target="#accordion-color-body-5"
          aria-expanded="false"
          aria-controls="accordion-color-body-5"
          onClick={() => {
            accordionHandler(5);
          }}
        >
          <span>What&apos;s Next?</span>
        </button>
      </h2>
      <div
        id="accordion-color-body-5"
        className="hidden"
        aria-labelledby="accordion-color-heading-5"
      >
        <div className="p-5 border border-t-0 bg-white">
          <p className="mb-2 text-gray-700">
            Once you&apos;ve learned how to do a basic query, the next step
            would be to learn how to utilize the Property Detail or Property
            Detail Bulk API to get even more comprehensive data on your
            properties returned from the Property Search API.
          </p>
        </div>
      </div>
    </div>
  );
}
