"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

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

export default function LeadGenForm() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Function to handle change in selected options
  const handleSelectChange = (e) => {
    const options = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(options);
  };

  // Dummy options
  const options = [
    { value: "nightlife", label: "Nightlife" },
    { value: "adventure", label: "Adventure" },
    { value: "romantic", label: "Romantic" },
    { value: "culture", label: "Culture" },
    { value: "nature", label: "Nature" },
    { value: "architecture", label: "Architecture" },
  ];

  async function createLead(formData) {
    try {
      const response = await axios.post(
        "https://sas.doest.in/store/S171799969700017143897175624819348/leads",
        {
          store: "S171799969700017143897175624819348",
          lead_profile: {
            hotel_category: formData.get("hotel_category"),
            vacation_type: formData.get("vacation_type"),
            number_of_days: formData.get("number_of_days"),
            passions: selectedOptions,
          },
          store_customer: {
            first_name: formData.get("first_name"),
            last_name: formData.get("last_name"),
            phone: formData.get("phone-number"),
            phone_same_as_wa: true,
            country_code: "91",
            email: formData.get("email"),
          },
          data: {
            budget: formData.get("budget"),
            destination: formData.get("destination"),
            product: formData.get("product"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    setIsSuccessModalOpen(true);
  }
  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    window.location.reload();
  };

  return (
    <div className="bg-white px-4 py-5 sm:px-6 lg:px-8 m-2 rounded-lg">
      <form
        action={createLead}
        className="mx-auto mt-5 max-w-xl sm:mt-10 lg:mt-20"
      >
        <div className="flex flex-col gap-x-8 gap-y-2">
          {/* <label
            htmlFor="personal-information"
            className="block text-sm font-semibold leading-6  col-span-full"
          >
            We recommend going through the video above before you fill this
            form.
          </label> */}
          <hr className="col-span-full"></hr>
          <div className="w-full flex justify-center flex-row gap-x-2">
            <div className="w-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 "
              >
                First name
              </label>
              <div className="">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  required="true"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="w-full  sm:mt-0">
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 "
              >
                Last name
              </label>
              <div className="">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  required="true"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 "
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                required="true"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 "
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
                  className="h-full rounded-md border-0 bg-transparent py-2 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm"
                >
                  +91
                </label>
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                required="true"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="destination"
              className="block text-sm font-semibold leading-6 "
            >
              Destination Preferences (also, if any comments)
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="destination"
                id="destination"
                required="true"
                autoComplete="choose destination"
                className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="product"
              className="block text-sm font-semibold leading-6 "
            >
              Product
            </label>
            <div className="mt-2.5">
              <select
                name="product"
                id="product"
                className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6"
                required
              >
                <option value="">Select Product</option>{" "}
                {/* Add an empty option for default selection */}
                <option value="itinerary">Itinerary</option>
                <option value="itinerary_and_package">
                  Itinerary and Package
                </option>
              </select>
            </div>
          </div>

          <div className="w-full flex justify-center flex-row gap-x-2 ">
            <div className="w-full">
              <label
                htmlFor="budget"
                className="block text-sm font-semibold leading-6 "
              >
                Budget in INR
              </label>
              <div className="mt-2.5">
                <select
                  name="budget"
                  id="budget"
                  className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6"
                >
                  <option value="<50k">Upto 50,000</option>
                  <option value="50k-1lac">50k - 1 Lakh</option>
                  <option value="1lac-2lac">1 Lakh - 2 Lakh</option>
                  <option value="above-2lac">Above 2 Lakhs</option>
                </select>
              </div>
            </div>
            <div className="w-full sm:mt-0">
              <label
                htmlFor="hotel_category"
                className="block text-sm font-semibold leading-6 "
              >
                Hotel Category
              </label>
              <div className="mt-2.5">
                <select
                  name="hotel_category"
                  id="hotel_category"
                  className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6"
                >
                  <option value="3_star">3 Star</option>
                  <option value="4_star">4 Star</option>
                  <option value="5_star">5 Star</option>
                  <option value="air_bnbs">Air Bnbs</option>
                  <option value="home_stays">Homestays</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-2 ">
            <div className="w-full">
              <label
                htmlFor="vacation_type"
                className="block text-sm font-semibold leading-6 "
              >
                Type of Vacation
              </label>
              <div className="mt-2.5">
                <select
                  name="vacation_type"
                  id="vacation_type"
                  className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6"
                >
                  <option value="all_famous">All famous spots</option>
                  <option value="relaxing">Relaxing</option>
                  <option value="off_beat">Offbeat</option>
                  <option value="mixed">Mixed</option>
                </select>
              </div>
            </div>

            <div className="w-full sm:mt-0">
              <label
                htmlFor="number_of_days"
                className="block text-sm font-semibold leading-6 "
              >
                No.of Days
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="number_of_days"
                  id="number_of_days"
                  max="30"
                  className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="passions"
              className="block text-sm font-semibold leading-6 "
            >
              Passions
            </label>
            <div className="mt-2.5">
              <select
                name="passions"
                id="passions"
                className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-obtext sm:text-sm sm:leading-6"
                multiple
                value={selectedOptions} // Set value to the array of selected options
                onChange={handleSelectChange} // Handle change event
                required
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <label className="text-sm leading-6 text-gray-600 mt-4 sm:col-span-2">
          By submitting this, you agree to our{" "}
          <Link href="/tnc" className="font-medium ">
            Terms and Conditions
          </Link>
          .
        </label>
        <div className="mt-4 flex justify-center sm:col-span-2 bg-obtext">
          <button
            type="submit"
            className="rounded-md bg-obtext px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-obtext text-center"
          >
            Submit
          </button>
        </div>
      </form>
      {isSuccessModalOpen && <SuccessModal onClose={closeSuccessModal} />}
    </div>
  );
}
