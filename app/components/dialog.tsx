import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { PhoneIcon, XMarkIcon } from '@heroicons/react/24/solid';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { javascript } from '@codemirror/lang-javascript';

import Accordion from './accordion';

export default function DialogModal(props: any) {
  const { open, setOpen } = props;

  const cancelButtonRef = useRef(null);
  const [value, setValue] = useState(`
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

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full w-11/12 m-auto items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl transition-all sm:my-8">
                <div className="bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="flex text-base leading-6 border-b-2 border-gray-600"
                      >
                        <div className="pr-4 ">
                          <PhoneIcon className="w-10 border-2 border-gray-500 p-2 text-white rounded-md" />
                        </div>
                        <div className="flex">
                          <div>
                            <p className="font-semibold text-xl text-white">
                              Using the SkipTrace API
                            </p>
                            <p className="text-sm pb-2 text-gray-400">
                              Need to find contact info for your prospects? This
                              API returns phone numbers, emails, social media
                              profiles, and more!
                            </p>
                          </div>
                        </div>
                        <div className="ml-auto">
                          <XMarkIcon
                            className="text-white w-4 cursor-pointer"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                          />
                        </div>
                      </Dialog.Title>
                      <div className="mt-2 flex">
                        <div className="px-4 my-4 border-r-2 solid border-gray-600">
                          <Accordion />
                        </div>
                        <div className="mx-4 my-4">
                          <CodeMirror
                            value={value}
                            height="500px"
                            width="600px"
                            theme={dracula}
                            extensions={[javascript({ jsx: true })]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
