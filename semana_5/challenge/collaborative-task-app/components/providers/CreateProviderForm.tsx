"use client";

import { useState } from "react";

import {
  useRouter,
} from "next/navigation";

import {
  createProviderAction,
} from "@/actions/provider.actions";

export default function CreateProviderForm() {
  const router =
    useRouter();

  const [
    businessName,
    setBusinessName,
  ] = useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [rfc, setRfc] =
    useState("");

  const [
    type,
    setType,
  ] = useState(1);

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!businessName.trim()) {
      alert(
        "El nombre del proveedor es obligatorio"
      );

      return;
    }

    const formData =
      new FormData();

    formData.append(
      "business_name",
      businessName
    );

    formData.append(
      "email",
      email
    );

    formData.append(
      "phone",
      phone
    );

    formData.append(
      "rfc",
      rfc
    );

    formData.append(
      "type",
      type.toString()
    );

    try {
      setLoading(true);

      const result =
        await createProviderAction(
          formData
        );

      alert(
        result.message
      );

      if (!result.ok)
        return;

      router.push(
        "/provider"
      );

      router.refresh();
    } catch (error) {
      console.error(error);

      alert(
        "No se pudo crear el proveedor"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={
        handleSubmit
      }
      className="space-y-6"
    >
      <div>
        <label>
          Business Name
        </label>

        <input
          type="text"
          value={
            businessName
          }
          onChange={(e) =>
            setBusinessName(
              e.target.value
            )
          }
          className="
            w-full
            border
            rounded-lg
            p-3
          "
          required
        />
      </div>

      <div>
        <label>
          Email
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          className="
            w-full
            border
            rounded-lg
            p-3
          "
        />
      </div>

      <div>
        <label>
          Phone
        </label>

        <input
          type="text"
          value={phone}
          onChange={(e) =>
            setPhone(
              e.target.value
            )
          }
          className="
            w-full
            border
            rounded-lg
            p-3
          "
        />
      </div>

      <div>
        <label>
          RFC
        </label>

        <input
          type="text"
          value={rfc}
          onChange={(e) =>
            setRfc(
              e.target.value
            )
          }
          className="
            w-full
            border
            rounded-lg
            p-3
          "
        />
      </div>

      <div>
        <label>
          Type
        </label>

        <select
          value={type}
          onChange={(e) =>
            setType(
              Number(
                e.target.value
              )
            )
          }
          className="
            w-full
            border
            rounded-lg
            p-3
          "
        >
          <option value={1}>
            Business
          </option>

          <option value={2}>
            Person
          </option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="
          bg-black
          text-white
          px-6
          py-3
          rounded-xl
        "
      >
        {loading
          ? "Creating..."
          : "Create Provider"}
      </button>
    </form>
  );
}