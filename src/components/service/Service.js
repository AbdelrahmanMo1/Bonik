import Data from "./Data";
const Service = () => {
  return (
    <section className="py-5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 md:gap-x-5 grid-cols-2 gap-x-10 gap-y-8">
          {Data.map((service) => {
            const { id, icon, title, decs } = service;
            return (
              <div key={id} className="flash-box p-5 rounded-md">
                <h2 className="text-4xl text-[#e94560]">{icon}</h2>
                <h3 className="pb-2 pt-3 text-[#33415c] font-bold tracking-wide">
                  {title}
                </h3>
                <p className="text-[#979dac] lg:text-lg  sm:text-sm">{decs}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
