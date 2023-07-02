import Card from "./Card";
import { CiDiscount1 } from "react-icons/ci";
import "./discount.css";
const Discount = () => {
  return (
    <section className="container mx-auto py-8">
      <div className="flex items-center text-3xl font-bold space-x-1 mb-5">
        <i className="text-[#e94560]">
          <CiDiscount1 />
        </i>
        <p className="text-[#2B2C30]">Discount</p>
      </div>
      <Card />
    </section>
  );
};

export default Discount;
