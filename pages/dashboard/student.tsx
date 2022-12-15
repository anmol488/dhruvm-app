import { getProducts, Product } from "@stripe/firestore-stripe-payments";
import Link from "next/link";
import Timings from "../../components/Timings";
import useAuth from "../../hooks/useAuth";
import useEnroll from "../../hooks/useEnroll";
import payments from "../../lib/stripe";

interface Props {
  timings: Product[];
}

const Student = ({ timings }: Props) => {
  const { logout, loading, user } = useAuth();
  const enrollment = useEnroll(user);

  if (loading || enrollment === null) return null;

  if (!enrollment) return <Timings timings={timings} />;

  return (
    <div>
      <header>
        <Link href="/info">
          <button className="rounded bg-[#E50914] p-3 font-semibold">
            Student Dashboard
          </button>
        </Link>

        <button
          className="rounded bg-[#E50914] p-3 font-semibold"
          onClick={logout}
        >
          Logout
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-5 pt-28 pb-12 transition-all md:px-10">
        <Link href="/dashboard/student/announcements">
          <h1 className="mb-10 text-3xl font-medium hover:underline">
            Click to view your announcements
          </h1>
        </Link>
      </main>
    </div>
  );
};

export default Student;

export const getServerSideProps = async () => {
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
