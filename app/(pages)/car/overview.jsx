const Overview = ({ car }) => {
  const arr = Object.entries(car).filter(
    ([key]) => key !== "_id" && key !== "imageUrl"
  );

  return (
    <section
      className="
        w-full
        rounded-2xl border border-gray-200/70
        bg-white dark:bg-neutral-900 shadow-sm
        p-5
      "
    >
      <h3 className="text-lg font-semibold">Araç Özeti</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        {arr.map(([key, value]) => (
          <div
            key={key}
            className="
              flex items-center justify-between gap-4
              rounded-lg border border-gray-100/70 dark:border-neutral-800
              px-3 py-2
            "
          >
            <span className="capitalize text-gray-500">{key}</span>
            <span className="font-medium break-all text-right">
              {String(value)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
