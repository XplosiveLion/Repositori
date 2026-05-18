"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  UserPlus,
  User,
  Mail,
  Lock,
  ShieldCheck,
  BadgeInfo,
} from "lucide-react";

import { registerSchema } from "@/lib/validations";

import { registerUser } from "@/services/auth.service";

import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await registerUser(data);

      alert("Usuario registrado correctamente");

      router.push("/login");
    } catch (error: any) {
      console.log("REGISTER ERROR:", error.response?.data);

      alert("No se pudo registrar el usuario");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        bg-white
        rounded-[32px]
        shadow-2xl
        border
        border-gray-100
        w-full
        max-w-2xl
        p-8
      "
    >
      {/* HEADER */}

      <div
        className="
          flex
          items-center
          gap-4
          mb-8
        "
      >
        <div
          className="
            w-16
            h-16
            rounded-2xl
            bg-blue-50
            flex
            items-center
            justify-center
          "
        >
          <UserPlus size={34} />
        </div>

        <div>
          <h1
            className="
              text-3xl
              font-bold
            "
          >
            Register
          </h1>

          <p
            className="
              text-gray-500
              text-sm
              mt-1
            "
          >
            Crea tu cuenta
          </p>
        </div>
      </div>

      {/* GRID */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
        "
      >
        {/* USERNAME */}

        <div>
          <label
            className="
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              mb-2
            "
          >
            <BadgeInfo size={16} />
            Username
          </label>

          <input
            {...register("username")}
            placeholder="kevin123"
            className="
              w-full
              border
              border-gray-300
              rounded-2xl
              p-4
              outline-none
              transition
              focus:ring-2
              focus:ring-blue-400
              focus:border-blue-400
            "
          />

          {errors.username && (
            <p className="text-red-500 text-sm mt-2">
              {errors.username.message as string}
            </p>
          )}
        </div>

        {/* EMAIL */}

        <div>
          <label
            className="
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              mb-2
            "
          >
            <Mail size={16} />
            Correo
          </label>

          <input
            {...register("email")}
            placeholder="correo@empresa.com"
            className="
              w-full
              border
              border-gray-300
              rounded-2xl
              p-4
              outline-none
              transition
              focus:ring-2
              focus:ring-blue-400
              focus:border-blue-400
            "
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-2">
              {errors.email.message as string}
            </p>
          )}
        </div>

        {/* FIRST NAME */}

        <div>
          <label
            className="
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              mb-2
            "
          >
            <User size={16} />
            First Name
          </label>

          <input
            {...register("firstName")}
            placeholder="Kevin"
            className="
              w-full
              border
              border-gray-300
              rounded-2xl
              p-4
              outline-none
              transition
              focus:ring-2
              focus:ring-blue-400
              focus:border-blue-400
            "
          />

          {errors.firstName && (
            <p className="text-red-500 text-sm mt-2">
              {errors.firstName.message as string}
            </p>
          )}
        </div>

        {/* LAST NAME */}

        <div>
          <label
            className="
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              mb-2
            "
          >
            <User size={16} />
            Last Name
          </label>

          <input
            {...register("lastName")}
            placeholder="Alcocer"
            className="
              w-full
              border
              border-gray-300
              rounded-2xl
              p-4
              outline-none
              transition
              focus:ring-2
              focus:ring-blue-400
              focus:border-blue-400
            "
          />

          {errors.lastName && (
            <p className="text-red-500 text-sm mt-2">
              {errors.lastName.message as string}
            </p>
          )}
        </div>

        {/* PASSWORD */}

        <div>
          <label
            className="
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              mb-2
            "
          >
            <Lock size={16} />
            Password
          </label>

          <input
            type="password"
            {...register("password")}
            placeholder="********"
            className="
              w-full
              border
              border-gray-300
              rounded-2xl
              p-4
              outline-none
              transition
              focus:ring-2
              focus:ring-blue-400
              focus:border-blue-400
            "
          />

          {errors.password && (
            <p className="text-red-500 text-sm mt-2">
              {errors.password.message as string}
            </p>
          )}
        </div>

        {/* CONFIRM PASSWORD */}

        <div>
          <label
            className="
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              mb-2
            "
          >
            <ShieldCheck size={16} />
            Confirm Password
          </label>

          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="********"
            className="
              w-full
              border
              border-gray-300
              rounded-2xl
              p-4
              outline-none
              transition
              focus:ring-2
              focus:ring-blue-400
              focus:border-blue-400
            "
          />

          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-2">
              {errors.confirmPassword.message as string}
            </p>
          )}
        </div>
      </div>


      

      {/* BUTTON */}

      <button
        disabled={isSubmitting}
        className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          disabled:bg-gray-400
          text-white
          py-4
          rounded-2xl
          font-semibold
          transition
          mt-8
        "
      >
        {isSubmitting ? "Registrando..." : "Crear cuenta"}
      </button>
    </form>
  );
}
