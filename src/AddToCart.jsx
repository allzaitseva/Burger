import { useDispatch } from "react-redux";
import { addItem, toggleCart } from "./cartSlice";

export default function AddToCart({ id, title, price, img, openOnAdd = false }) {
const dispatch = useDispatch();

const handleAdd = () => {
dispatch(addItem({ id, title, price, img }));
if (openOnAdd) dispatch(toggleCart(false));
};

return (
<button
type="button"
onClick={handleAdd}
className="mt-2 w-full px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 duration-1000 text-white transition-colors cursor-pointer"
>
Add to cart
</button>
);
}