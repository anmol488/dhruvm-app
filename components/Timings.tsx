import Head from "next/head";
import useAuth from "./useAuth";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Product } from "@stripe/firestore-stripe-payments";
import Table from "./Table";
import { useState } from "react";
import Loader from "./Loader";
import { loadCheckout } from "../lib/stripe";

interface Props {
  timings: Product[];
}

function Timings({ timings }: Props) {
  const { logout, user } = useAuth();
  const [selectedTime, setSelectedTime] = useState<Product | null>(timings[2]);
  const [isBillingLoading, setIsBillingLoading] = useState(false);

  const enrollForTiming = () => {
    if (!user) return;

    loadCheckout(selectedTime?.prices[0].id!);
    setIsBillingLoading(true);
  };

  return (
    <div>
      <Head>
        <title>Timings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div />
        <button
          className="rounded bg-[#E50914] p-3 font-semibold"
          onClick={logout}
        >
          Logout
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the class timings that suit your schedule
        </h1>

        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Industry standard
            teaching resources
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Comprehensive
            review of each major instrument
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Regular homework
            for better progress
          </li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-center self-end md:w-3/5">
            {timings.map((timing) => (
              <div
                key={timing.id}
                className={`planBox ${
                  selectedTime?.id === timing.id ? "opacity-100" : "opacity-60"
                }`}
                onClick={() => setSelectedTime(timing)}
              >
                {timing.name}
              </div>
            ))}
          </div>

          <Table timings={timings} selectedTime={selectedTime} />

          <button
            disabled={!selectedTime || isBillingLoading}
            className={`mx-auto w-11/12 font-semibold rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ${
              isBillingLoading && "opacity-60"
            }`}
            onClick={enrollForTiming}
          >
            {isBillingLoading ? (
              <Loader color="dark:fill-gray-300" />
            ) : (
              "Enroll"
            )}
          </button>
        </div>
      </main>
    </div>
  );
}

export default Timings;
