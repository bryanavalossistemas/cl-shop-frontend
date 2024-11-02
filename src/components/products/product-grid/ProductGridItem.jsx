import { Link } from "react-router-dom";

export default function ProductGridItem({ producto }) {
  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link to={`/producto/${producto.id}`}>
        <img
          src={producto.imagenProducto.url}
          alt={producto.nombre}
          className="w-full object-cover rounded"
          width={500}
          height={500}
          // onMouseEnter={() => setDisplayImage(producto.images[1])}
          // onMouseLeave={() => setDisplayImage(producto.images[0])}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-600" to={`/producto/${producto.id}`}>
          {producto.nombre}
        </Link>
        <span className="font-bold">${producto.precioVenta}</span>
      </div>
    </div>
  );
}
