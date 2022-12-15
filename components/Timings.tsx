import Head from "next/head";
import useAuth from "./useAuth";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Product } from "@stripe/firestore-stripe-payments";
import Table from "./Table";
import { useState } from "react";

interface Props {
  timings: Product[];
}

function Timings({ timings }: Props) {
  const { logout } = useAuth();
  const [selectedTime, setSelectedTime] = useState<Product | null>(timings[2])

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

      <main className="max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the class timings that suit your schedule
        </h1>

        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Personalized
            attention
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Comprehensive
            review of each major instrument
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> All classes are
            online. Join from anywhere!
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
        </div>
      </main>
    </div>
  );
}

export default Timings;
