import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

export default function QuantitySelector({ quantity }) {
  const [count, setCount] = useState(quantity);

  const onQuantityChanged = (value) => {
    if (count + value < 1) return;

    setCount(count + value);
  };

  return (
    <div className="flex">
      <button onClick={() => onQuantityChanged(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>

      <span className="flex items-center justify-center w-20 mx-3 px-5 bg-gray-100 text-center rounded">
        {count}
      </span>

      <button onClick={() => onQuantityChanged(+1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
}