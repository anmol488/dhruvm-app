import { getProducts, Product } from "@stripe/firestore-stripe-payments";
import Timings from "../../components/Timings";
import useAuth from "../../components/useAuth";
import payments from "../../lib/stripe";

interface Props {
  timings: Product[];
}

const Student = ({ timings }: Props) => {
  const { logout, loading } = useAuth();
  const subscription = false;

  if (loading || subscription === null) return null;

  if (!subscription) return <Timings timings={timings} />;

  return (
    <div>
      <button onClick={logout}>logout</button>
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
