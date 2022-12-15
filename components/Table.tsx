import { CheckIcon } from "@heroicons/react/24/outline";
import { Product } from "@stripe/firestore-stripe-payments";

interface Props {
  timings: Product[];
  selectedTime: Product | null;
}

function Table({ timings, selectedTime }: Props) {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Price/3 months</td>
          {timings.map((timing) => (
            <td
              className={`tableDataFeature ${
                selectedTime?.id === timing.id
                  ? "text-[#E50914]"
                  : "text-[gray]"
              }`}
              key={timing.id}
            >
              ₹{timing.prices[0].unit_amount! / 100}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">No. of classes</td>
          {timings.map((timing) => (
            <td
              className={`tableDataFeature ${
                selectedTime?.id === timing.id
                  ? "text-[#E50914]"
                  : "text-[gray]"
              }`}
              key={timing.id}
            >
              {timing.metadata.numClasses}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Online?</td>
          {timings.map((timing) => (
            <td
              className={`tableDataFeature ${
                selectedTime?.id === timing.id
                  ? "text-[#E50914]"
                  : "text-[gray]"
              }`}
              key={timing.id}
            >
              {timing.metadata.flexibility === "true" && (
                <CheckIcon className="inline-block h-6 w-6" />
              )}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Personalized?</td>
          {timings.map((timing) => (
            <td
              className={`tableDataFeature ${
                selectedTime?.id === timing.id
                  ? "text-[#E50914]"
                  : "text-[gray]"
              }`}
              key={timing.id}
            >
              {timing.metadata.oneInteraction === "true" && (
                <CheckIcon className="inline-block h-6 w-6" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
