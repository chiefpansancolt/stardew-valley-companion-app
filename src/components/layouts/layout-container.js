export default function LayoutContainer({ children }) {
  return (
    <div className="min-h-screen flex overflow-hidden">
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div className="flex-1 relative z-0 xl:flex overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
