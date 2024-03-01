// pages/terms-and-conditions.js

import Head from "next/head";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Wandertwoways - Terms and Conditions</title>
        <meta
          name="description"
          content="Terms and Conditions for Wandertwoways - Your Trusted Travel Partner"
        />
      </Head>

      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome to Wandertwoways - Your Trusted Travel Partner.
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our services, you agree to comply with and be
          bound by these terms and conditions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          2. Booking and Reservations
        </h2>
        <p className="mb-4">
          2.1 To book a tour or make a reservation, you must provide accurate
          and complete information.
        </p>
        <p>
          2.2 Wandertwoways reserves the right to accept or reject any booking
          at our discretion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. Payment and Cancellation
        </h2>
        <p className="mb-4">
          3.1 Payment details, including deposit and cancellation policies, will
          be provided during the booking process.
        </p>
        <p className="mb-4">
          3.2 Cancellation fees may apply, and refunds are subject to
          Wandertwoways cancellation policy.
        </p>
        <p className="mb-4">
          3.3 In case of cancellation due to a mishap (such as natural
          disasters, political unrest, etc.), Wandertwoways will assess the
          situation and may offer refunds or alternative travel arrangements
          based on the circumstances.
        </p>
        <p>
          3.4 Wandertwoways is not liable for payment or compensation in the
          event of external cancellations, including but not limited to flight
          delays or cancellations. Travelers are advised to secure appropriate
          travel insurance to cover such incidents.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Refund Policy</h2>
        <p className="mb-4">
          4.1 Refunds will be issued based on the cancellation policy outlined
          during the booking process.
        </p>
        <p>
          4.2 In the event of a mishap preventing the completion of the tour,
          Wandertwoways will review the situation and may provide partial
          refunds or alternative arrangements as deemed appropriate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Travel Insurance</h2>
        <p>
          5.1 It is strongly recommended that all travelers have comprehensive
          travel insurance covering medical, trip cancellation, and other
          unforeseen events.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p className="mb-4">
          For any inquiries or concerns regarding these terms and conditions,
          please contact us at:
        </p>
        <p>
          Email:{" "}
          <a className="text-blue-500" href="mailto:admin@wandertwoways.com">
            admin@wandertwoways.com
          </a>
        </p>
        <p>
          Website:{" "}
          <a className="text-blue-500" href="https://www.wandertwoways.com">
            www.wandertwoways.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
