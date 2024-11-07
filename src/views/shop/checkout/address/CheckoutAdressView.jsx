import Title from "@/components/Title";
import { Link } from "react-router-dom";
import AddressForm from "./components/AddressForm";
import useAuth from "@/hooks/useAuth";
import distritoService from "@/services/distritoService";
import { useQuery } from "@tanstack/react-query";
import direccionCompradorService from "@/services/direccionCompradorService";

export default function CheckoutAdressView() {
  const { data: distritos, isLoading } = useQuery({
    queryKey: ["distritos"],
    queryFn: distritoService.getAllPublic,
  });

  const { data: usuario } = useAuth();

  if (!usuario) {
    return <h3 className="text-5xl">500 - No hay sesión de usuario</h3>;
  }

  const { data: direccionComprador } = useQuery({
    queryKey: ["direccionComprador"],
    queryFn: direccionCompradorService.getByUsuarioId({
      usuarioId: usuario.id,
    }),
  });

  if (isLoading) return "cargando ...";

  if (distritos && direccionComprador) {
    return (
      <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">
        <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
          <Title title="Dirección" subtitle="Dirección de entrega" />

          <AddressForm
            distritos={distritos}
            direccionComprador={direccionComprador ?? undefined}
          />

          <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
            <div className="flex flex-col mb-2">
              <span>Nombres</span>
              <input
                type="text"
                className="p-2 border rounded-md bg-gray-200"
              />
            </div>

            <div className="flex flex-col mb-2">
              <span>Apellidos</span>
              <input
                type="text"
                className="p-2 border rounded-md bg-gray-200"
              />
            </div>

            <div className="flex flex-col mb-2">
              <span>Dirección</span>
              <input
                type="text"
                className="p-2 border rounded-md bg-gray-200"
              />
            </div>

            <div className="flex flex-col mb-2">
              <span>Dirección 2 (opcional)</span>
              <input
                type="text"
                className="p-2 border rounded-md bg-gray-200"
              />
            </div>

            <div className="flex flex-col mb-2">
              <span>Código postal</span>
              <input
                type="text"
                className="p-2 border rounded-md bg-gray-200"
              />
            </div>

            <div className="flex flex-col mb-2">
              <span>Ciudad</span>
              <input
                type="text"
                className="p-2 border rounded-md bg-gray-200"
              />
            </div>

            <div className="flex flex-col mb-2">
              <span>País</span>
              <select className="p-2 border rounded-md bg-gray-200">
                <option value="">[ Seleccione ]</option>
                <option value="CRI">Costa Rica</option>
              </select>
            </div>

            <div className="flex flex-col mb-2">
              <span>Teléfono</span>
              <input
                type="text"
                className="p-2 border rounded-md bg-gray-200"
              />
            </div>

            <div className="flex flex-col mb-2 sm:mt-10">
              <Link
                to="/checkout"
                className="btn-primary flex w-full sm:w-1/2 justify-center "
              >
                Siguiente
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
