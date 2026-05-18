import { notFound } from "next/navigation";

import {
  getProviderById,
} from "@/services/provider.service";

import EditProviderModal from "@/components/providers/EditProviderModal";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProviderPage(
  {
    params,
  }: Props
) {
  const { id } =
    await params;

  const provider =
    await getProviderById(id);

  if (!provider) {
    notFound();
  }

  return (
    <main
      className="
        min-h-screen
        p-6
      "
    >
      <div
        className="
          max-w-3xl
          mx-auto
          bg-white
          shadow
          rounded-xl
          p-6
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            mb-6
          "
        >
          Provider Detail
        </h1>

        <div
          className="
            flex
            flex-col
            gap-3
          "
        >
          <p>
            <strong>
              Name:
            </strong>
            {" "}
            {
              provider.business_name
            }
          </p>

          <p>
            <strong>
              Email:
            </strong>
            {" "}
            {provider.email}
          </p>

          <p>
            <strong>
              Phone:
            </strong>
            {" "}
            {provider.phone}
          </p>

          <p>
            <strong>
              RFC:
            </strong>
            {" "}
            {provider.rfc}
          </p>

          <p>
            <strong>
              Credit:
            </strong>
            {" "}
            {
              provider.credit_limit
            }
          </p>

          <p>
            <strong>
              Type:
            </strong>
            {" "}
            {provider.type ===
            1
              ? "Business"
              : "Person"}
          </p>
        </div>

        <div className="mt-6">
          <EditProviderModal
            provider={provider}
          />
        </div>
      </div>
    </main>
  );
}