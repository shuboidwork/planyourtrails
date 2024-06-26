"use client";
import { useState } from "react";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import axios from "axios";
import Link from "next/link";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Thank you for response
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-lg text-gray-500">
              We will get back to you soon with amazing travel plan. Stay tuned,
              our team will reach out to you.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            {/* Using useRouter to dismiss modal*/}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-obtext text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function LeadGenGroupForm() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  async function createLead(formData) {
    try {
      const response = await axios.post("https://sas.doest.in/store/S170928001000015930302999376402427/leads", {
      store: 'S170928001000015930302999376402427',
      data: {
          first_name: formData.get("first_name"),
          last_name: formData.get("last_name"),
          destination: formData.get("destination"),
          email: formData.get("email"),
          phone: formData.get("phone-number"),
          country_code: "91",
          trip_comments: formData.get("trip_comments"),
          trip: formData.get("trip")


          // add more data if needed
        },
      });
      
    } catch (error) {
      
      console.log(error);
    }
    setIsSuccessModalOpen(true);
  }
  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    window.location.reload();
  };

  const [agreed, setAgreed] = useState(false);

  return (
    <div className=" bg-white px-6 py-5 sm:py-5 lg:px-8 m-2 rounded-lg">
      <form
        action={createLead}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-obtext"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-obtext shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-obtext"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last_name"
                id="last_name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-obtext shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-obtext"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-obtext shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-obtext"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <label
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-2 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm"
                >
                  +91
                </label>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-obtext shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6"
              />
            </div>
          </div>

           <div className="sm:col-span-2">
            <label
              htmlFor="trip"
              className="block text-sm font-semibold leading-6 text-obtext"
            >
              Select Trip you are interested in
            </label>
            <div className="mt-2.5">
              <select id="trip" name="trip" className="block w-full rounded-md border-0 px-3.5 py-2 text-obtext shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6">
  <option value="azerbaijanJune24">Azerbaijan, Couples Trip, 6th June 2024</option>

</select>
            </div>
          </div>

          <div>
            <label
              htmlFor="trip-comments"
              className="block text-sm font-semibold leading-6 text-obtext"
            >
              Add your comments
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="trip_comments"
                id="trip_comments"
                autoComplete="Share any comments"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-obtext shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6"
              />
            </div>
          </div>
         
          
            <label className="text-sm leading-6 text-gray-600">
              By submitting this, you agree to our{" "}
              <Link href="/tnc" className="font-semibold text-obtext">
                Terms and Conditions
              </Link>
              .
            </label>
        </div>
        <div className="mt-10 bg-obtext">
          <button
            type="submit"
            className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
      {isSuccessModalOpen && <SuccessModal onClose={closeSuccessModal} />}
    </div>
  );
}
