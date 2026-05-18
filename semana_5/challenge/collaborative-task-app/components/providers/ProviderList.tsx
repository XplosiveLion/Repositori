"use client";

import { useState } from "react";

import ProviderCard from "./ProviderCard";

import EditProviderModal from "./EditProviderModal";

import { Provider } from "@/types/provider.types";

interface Props {
  providers: Provider[];
}

export default function ProviderList({
  providers,
}: Props) {
  const [
    selectedProvider,
    setSelectedProvider,
  ] = useState<Provider | null>(
    null
  );

  const activeProviders =
    providers.filter(
      (provider) =>
        provider.is_archived === false
    );

  return (
    <>
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
        "
      >
        {activeProviders.map(
          (provider) => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              openModal={
                setSelectedProvider
              }
            />
          )
        )}
      </div>

      {selectedProvider && (
        <EditProviderModal
          provider={selectedProvider}
          closeModal={() =>
            setSelectedProvider(null)
          }
        />
      )}
    </>
  );
}