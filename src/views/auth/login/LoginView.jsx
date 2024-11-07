import authService from "@/services/authService";
import useAuthStore from "@/stores/auth/authStore";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { IoInformationOutline } from "react-icons/io5";
import { useState } from "react";

export default function LoginView() {
  const setToken = useAuthStore((state) => state.setToken);
  const [loginError, setLoginError] = useState(false);

  const valoresIniciales = {
    correo: "",
    contrasenia: "",
  };
  const { register, handleSubmit, setError } = useForm({
    defaultValues: valoresIniciales,
  });

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: authService.login,
    onError: (error) => {
      console.log(error);
      setLoginError(true);
    },
    onSuccess: ({ token }) => {
      setToken({ token });
      navigate("/");
    },
  });

  const handleIniciarSesion = (data) => {
    mutate({ data });
  };

  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`font-title text-4xl mb-5`}>Ingresar</h1>

      <form
        onSubmit={handleSubmit(handleIniciarSesion)}
        className="flex flex-col"
      >
        <label htmlFor="email">Correo electrónico</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email"
          {...register("correo", { required: true })}
        />

        <label htmlFor="email">Contraseña</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="password"
          {...register("contrasenia", { required: true })}
        />

        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {loginError && (
            <div className="flex flex-row mb-2">
              <IoInformationOutline className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">
                Credenciales no son correctas
              </p>
            </div>
          )}
        </div>

        <button
          type="submit"
          className={clsx({
            "btn-primary": !isPending,
            "btn-disabled": isPending,
          })}
          disabled={isPending}
        >
          Ingresar
        </button>

        {/* divisor l ine */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link to="/auth/new-account" className="btn-secondary text-center">
          Crear una nueva cuenta
        </Link>
      </form>
    </div>
  );
}
