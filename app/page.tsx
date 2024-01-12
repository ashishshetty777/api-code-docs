'use client';
import React from 'react';
import Image from 'next/image';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { javascript } from '@codemirror/lang-javascript';
import {
  GlobeAmericasIcon,
  DocumentMagnifyingGlassIcon,
  PhoneIcon,
  HomeIcon,
  HomeModernIcon,
  BackwardIcon,
} from '@heroicons/react/24/solid';

import Layout from './components/layout';
import Cards from './components/card';
import DialogModal from './components/dialog';

let listData: Array<object>;

listData = [
  {
    title: 'Using the SkipTrace API',
    icon: PhoneIcon,
    description:
      'Need to find contact info for your prospects? This API returns phone numbers, emails, social media profiles, and more!',
    stepsTitle: '3 Steps',
    buttonText: 'Open Recipe',
  },
  {
    title: 'Property Search: Build Your 1st List',
    icon: DocumentMagnifyingGlassIcon,
    description: 'Simple code sample showing how the Property Search API works',
    stepsTitle: '5 Steps',
    buttonText: 'Open Recipe',
  },
  {
    title: 'Property Detail Example',
    icon: HomeIcon,
    description: 'Obtain the full property record for any property in the U.S.',
    stepsTitle: '3 Steps',
    buttonText: 'Open Recipe',
  },
  {
    title: `It's as Easy as Two API Calls`,
    icon: HomeModernIcon,
    description:
      'Make the most of our property data sets by enriching your Property Search results with the Property Bulk Detail API',
    stepsTitle: '3 Steps',
    buttonText: 'Open Recipe',
  },
  {
    title: 'Property Search: Paging Example',
    icon: BackwardIcon,
    description:
      'Using a Property Search Count query in order to page through a list of filter results larger than the maximum size of 250',
    stepsTitle: '3 Steps',
    buttonText: 'Open Recipe',
  },
  {
    title: `Determine a Property Parcel's Geographic Boundaries`,
    icon: GlobeAmericasIcon,
    description:
      'Get the geographic boundaries for the provided property. The results from this endpoint will help you overlay properties on Google Maps and other map interfaces in your applications',
    stepsTitle: '3 Steps',
    buttonText: 'Open Recipe',
  },
];

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState(`
  JavaScript


  async function runSearch() {
    try {
      
      const options = {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
           'x-api-key': '<<apiKey>>',
           'x-user-id': ''
         },
         data: {
           count: false, //'false' here will pull back properties instead of just a count
           size: 50,
           city: 'Houston',
           state: 'TX',
           
           //Your choice of filters
           /*
             See More in our API Docs:
             https://beta.realestateapi.com/reference/property-search-api
             
             negative_equity: true,
             equity: true,
             cash_buyer: true,
             quit_claim: true,
             corporate_owned: true,
             free_clear: true,
             absentee_owner: true,
             reo: true,
             auction: true,
             foreclosure: true,
             pre_foreclosure: true,
             beds_min: 2,
             beds_max: 4
           */
           
           
         }
       };
   
       let response = await fetch('https://api.realestateapi.com/v2/PropertySearch', options)
   
       let data = await response.json();
      
        return data;
   
    } catch(e) {
        //200 - successful search
        //400 - need to reformat the request body (stringified, fits required field models from docs
        //404 - look at the url and make sure you have the correct endpoint url
        //429 - you've reached a rate limit, consider adding interval timing to large amounts of calls
        //500 - contact us in our discord community or at dev@realestateapi.com
    }
   }`);

  const onChange = React.useCallback((val: any, viewUpdate: any) => {
    setValue(val);
  }, []);

  const openRecipeModal = () => {
    setOpen(!open);
  };

  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="max-w-5xl w-full justify-between lg:flex mb-8">
          <div className="flex flex-col mr-8">
            <p className="text-3xl font-semibold text-gray-700">
              Using the SkipTrace API
            </p>
            <p className="text-m text-gray-500 py-2">
              Need to find contact info for your prospects? This API returns
              phone numbers, emails, social media profiles, and more!
            </p>
            <p className="text-sm text-gray-500 py-2 font-semibold">
              IN THIS RECIPE
            </p>
            <p className="text-gray-500">
              <span className="text-sm pr-2">1 </span>
              <span className="text-sm">Step 1: Prepare the Input</span>
            </p>
            <p className="text-gray-500">
              <span className="text-sm pr-2">2 </span>
              <span className="text-sm">Step 2: Decide on Single or Bulk</span>
            </p>
            <p className="text-gray-500 pb-4">
              <span className="text-sm pr-2">3 </span>
              <span className="text-sm">What&apos;s Next?</span>
            </p>
            <div>
              <button
                className="rounded-md p-4 text-center text-l font-semibold bg-black text-white flex items-center"
                onClick={openRecipeModal}
              >
                <span className="px-2">
                  <PhoneIcon className="w-4" />
                </span>
                Open Recipe
              </button>
            </div>
          </div>
          <CodeMirror
            value={value}
            height="300px"
            width="600px"
            theme={dracula}
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-wrap justify-center">
          {listData.map((innerData: any, i: any) => {
            return (
              <Cards
                title={innerData.title}
                Icon={innerData.icon}
                stepsTitle={innerData.stepsTitle}
                body={innerData.description}
                key={i}
                theme={innerData.theme}
                width={'w-240'}
                btnComponent={() => {
                  return (
                    <button
                      className="w-full rounded-md p-2 text-center text-m bg-black text-white"
                      onClick={() => {}}
                    >
                      {innerData.buttonText}
                    </button>
                  );
                }}
              />
            );
          })}
        </div>
      </main>
      <DialogModal open={open} setOpen={setOpen} />
    </Layout>
  );
}
