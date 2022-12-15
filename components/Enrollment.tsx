import { useState } from "react";
import { goToBillingPortal } from "../lib/stripe";
import Loader from "./Loader";
import useAuth from "./useAuth";
import useEnroll from "./useEnroll";

function Enrollment() {
  const { user } = useAuth();
  const enrollment = useEnroll(user);
  const [isBillingLoading, setIsBillingLoading] = useState(false);

  const manageEnrollment = () => {
    if (enrollment) {
      setIsBillingLoading(true);
      goToBillingPortal();
    }
  };

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-3 md:border-x-0 md:border-t md:border-b-0 md:px-0">
      <div className="space-y-2 py-4">
        <h4 className="text-lg text-[gray]">Enrollment</h4>
        <button
          disabled={isBillingLoading || !enrollment}
          className="h-10 w-3/5 whitespace-nowrap bg-gray-300 py-2 text-sm font-medium text-black shadow-md hover:bg-gray-200 md:w-4/5"
          onClick={manageEnrollment}
        >
          {isBillingLoading ? (
            <Loader color="dark:fill-[#e50914]" />
          ) : (
            "Update Class Timings"
          )}
        </button>
      </div>

      <div className="flex flex-col justify-between pt-4 py-4 md:flex-row md:items-center md:pb-0">
        <div>
          <p className="font-medium">{user?.email}</p>
          <p className="text-[gray]">Password: ********</p>
        </div>
      </div>

      <div className="flex flex-col justify-between pt-4 pb-4 md:flex-row md:pb-0 md:items-center">
        <div>
          <p>
            {enrollment?.cancel_at_period_end
              ? "Your enrollment will end on"
              : "Your next fee payment date is "}
            {enrollment?.current_period_end}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Enrollment;
