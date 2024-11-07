import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAddressStore = create()(
  persist(
    (set, get) => ({
      address: {
        nombre: "",
        apellido: "",
        direccion: "",
        distrito: "",
        celular: "",
      },

      setAddress: (address) => {
        set({ address });
      },
    }),
    { name: "rn-shop-address-store" }
  )
);

export default useAddressStore;
