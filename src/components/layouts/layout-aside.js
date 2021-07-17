export default function LayoutAside({ children }) {
  return (
    <aside className="relative xl:flex xl:flex-col flex-shrink-0 xl:w-1/3">
      <div className="relative inset-0 pb-6 pt-3 px-5 xl:py-6 xl:pl-3 xl:pr-6">
        {children}
      </div>
    </aside>
  )
}
