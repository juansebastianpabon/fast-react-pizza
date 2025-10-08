import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (totalCartQuantity === 0) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 px-4 py-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base">
      <p className="sm:space-x6 space-x-4 font-semibold text-stone-300">
        <span>{totalCartQuantity} Pizzas </span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
