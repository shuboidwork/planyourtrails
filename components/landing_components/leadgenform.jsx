"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import Script from "next/script";

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
            travel_month: formData.get("travel_month"),
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
    <div className="bg-white px-4 py-5 sm:px-6 lg:px-8 m-2 rounded-lg w-full flex justify-center items-center">
      <div className="w-4/5">
        <iframe
          data-tally-src="https://tally.so/embed/wbYg7g?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="274"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Plan your trip with Chirag"
        ></iframe>

        <Script
          id="tally-js"
          src="https://tally.so/widgets/embed.js"
          onLoad={() => {
            Tally.loadEmbeds();
          }}
        />
      </div>
    </div>
  );
}
