import classNames from "@/scripts/class-names";

export default function LayoutMain({ isAlone, children }) {
  return (
    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
      <div
        className={classNames(
          isAlone ? "xl:px-6" : "xl:pl-6 xl:pr-3",
          "relative inset-0 pt-6 pb-3 px-5 xl:py-6"
        )}
      >
        {children}
      </div>
    </main>
  );
}
