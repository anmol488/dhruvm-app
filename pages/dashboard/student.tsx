import { getProducts, Product } from "@stripe/firestore-stripe-payments";
import Link from "next/link";
import Timings from "../../components/Timings";
import useAuth from "../../components/useAuth";
import useEnroll from "../../components/useEnroll";
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
      <button onClick={logout}>logout</button>
      <Link href="/info">
        <button>student info</button>
      </Link>
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
