import Cart from "./Cart";
import { FaCertificate } from "react-icons/fa";
import "./newarrivals.css";

const NewArrivals = () => {
  return (
    <section className="container mx-auto pt-16">
      <div className="flex items-center text-3xl font-bold space-x-1 mb-5">
        <i className="text-[#e94560]">
          <FaCertificate />
        </i>
        <p className="text-[#2B2C30]">New Arrivals</p>
      </div>
      <Cart />
    </section>
  );
};

export default NewArrivals;
