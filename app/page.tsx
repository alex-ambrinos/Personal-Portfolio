export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <section className="flex flex-col items-center">
        <h2 className="text-neutral-400">coming soon</h2>
        <h1 className="text-3xl font-bold">Alex Ambrinos</h1>
        <div className="space-x-4 mt-1">
          <a
            href="https://diodagroup.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:underline underline-offset-4 decoration-dotted hover:text-neutral-300"
          >
            DiodaGroup.ro
          </a>
          <a
            href="
        https://hotelpisculnegru.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:underline underline-offset-4 decoration-dotted hover:text-neutral-300"
          >
            HotelPisculNegru.ro
          </a>
        </div>
      </section>
    </div>
  );
}
