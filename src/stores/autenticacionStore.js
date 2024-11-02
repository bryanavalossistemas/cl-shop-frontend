import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAutenticacionStore = create()(
  persist(
    (set, get) => ({
      token: null,

      setToken: (token) => {
        set(() => ({
          token: token,
        }));
      },
    }),
    { name: "cl-system-autenticacion-store" }
  )
);

export default useAutenticacionStore;
