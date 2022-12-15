import { getProducts, Product } from "@stripe/firestore-stripe-payments";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Enrollment from "../components/Enrollment";
import useAuth from "../hooks/useAuth";
import useEnroll from "../hooks/useEnroll";
import payments from "../lib/stripe";

interface Props {
  timings: Product[];
}

function Info({ timings }: Props) {
  const { user, logout } = useAuth();
  const enrollment = useEnroll(user);

  return (
    <div>
      <Head>
        <title>Student Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div />
        <Link href="/dashboard/student">
          <button className="rounded bg-[#E50914] p-3 font-semibold">
            Back
          </button>
        </Link>
      </header>

      <main className="mx-auto max-w-6xl px-5 pt-24 pb-12 transition-all md:px-10">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl">Student Info</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <img
              src="https://res.cloudinary.com/dcqjb4hp2/image/upload/v1671096355/4vfk4r_oihkh6.svg"
              className="h-7 w-7"
            />
            <p className="text-xs font-semibold text-[#555]">
              Student since {enrollment?.created}
            </p>
          </div>
        </div>

        <Enrollment />

        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-3 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0">
          <h4 className="text-lg text-[gray]">Class Timings Chosen</h4>
          <div>
            {
              timings.filter((timing) => timing.id === enrollment?.product)[0]
                ?.name
            }
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-3 md:border-x-0 md:border-t md:border-b-0 md:px-0">
          <h4 className="text-lg text-[gray]">Settings</h4>
          <p
            className="cursor-pointer text-blue-500 hover:underline"
            onClick={logout}
          >
            Logout
          </p>
        </div>
      </main>
    </div>
  );
}

export default Info;

export const getStaticProps: GetStaticProps = async () => {
  const timings = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((error) => console.log(error.message));

  return {
    props: {
      timings,
    },
  };
};
