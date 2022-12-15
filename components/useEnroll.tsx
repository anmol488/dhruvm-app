import {
  onCurrentUserSubscriptionUpdate,
  Subscription,
} from "@stripe/firestore-stripe-payments";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import payments from "../lib/stripe";

function useEnroll(user: User | null) {
  const [enrollment, setEnrollment] = useState<Subscription | null>(null);

  useEffect(() => {
    if (!user) return;

    onCurrentUserSubscriptionUpdate(payments, (snapshot) => {
      setEnrollment(
        snapshot.subscriptions.filter(
          (enrollment) =>
            enrollment.status === "active" || enrollment.status === "trialing"
        )[0]
      );
    });
  }, []);

  return enrollment;
}

export default useEnroll;
