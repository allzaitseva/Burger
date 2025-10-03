import { useDispatch, useSelector } from "react-redux";
import { add } from "../cartSlice";
import { selectCartWithConverted, selectCartTotal } from "../selectors";
import { useGetRatesQuery } from "../ratesApi";

export default function MenuPage() {
  const dispatch = useDispatch();
  useGetRatesQuery(); // загрузим курсы валют (будут в кэше RTK Query)
  const items = useSelector(selectCartWithConverted);
  const total = useSelector(selectCartTotal);

  return (
    <div>
      <h1>Меню</h1>
      <button
        onClick={() => dispatch(add({ id: "dish1", qty: 1, priceBase: 10 }))}
      >
        Добавить блюдо в корзину
      </button>

      <h2>Корзина</h2>
      <div>Итого: {total.toFixed(2)}</div>
      {items.map((i) => (
        <div key={i.id}>
          {i.id}: {i.qty} × {i.price.toFixed(2)} {i.currency}
        </div>
      ))}
    </div>
  );
}
