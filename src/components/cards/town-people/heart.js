import classNames from "@/scripts/class-names";
import HeartOutline from "./heart-outline";
import HeartSolid from "./heart-solid";

export default function Heart({ isFilled, isPartial, percent, isFirst }) {
  return (
    <>
      {isFilled && (
        <HeartSolid classes={classNames(!isFirst ? "ml-1" : "", "text-pink-500 h-6 w-6")} />
      )}
      {!isFilled && !isPartial && (
        <HeartOutline classes={classNames(!isFirst ? "ml-1" : "", "h-6 w-6")} />
      )}
    </>
  );
}
