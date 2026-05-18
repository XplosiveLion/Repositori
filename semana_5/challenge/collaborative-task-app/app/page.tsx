import Link from "next/link";

import { Package, Truck, ArrowRight, Activity } from "lucide-react";

import LogoutButton from "@/components/layout/LogoutButton";

export default function HomePage() {
  return (
    <main
      className="
        min-h-screen
        bg-gray-100
        p-6
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
        "
      >
        {/* HEADER */}

        <div
          className="
            mb-10
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
              mb-4
            "
          >
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-white
                shadow
                flex
                items-center
                justify-center
              "
            >

              
              
              <Activity size={34} />
            </div>

            <div>
              <h1
                className="
                  text-4xl
                  font-bold
                "
              >
                Dashboard
              </h1>

              <p
                className="
                  text-gray-600
                  mt-1
                "
              >
                Collaborative management system
              </p>
            </div>
          </div>
          
        </div>

        {/* CARDS */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          "
        >
          {/* PROVIDERS */}

          <Link href="/provider">
            <div
              className="
                group
                bg-white
                rounded-3xl
                shadow
                hover:shadow-2xl
                transition-all
                duration-300
                p-8
                cursor-pointer
                border
                border-transparent
                hover:border-blue-100
                h-full
              "
            >
              <div
                className="
                  flex
                  justify-between
                  items-start
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
                  <Truck size={34} />
                </div>

                <ArrowRight
                  className="
                    text-gray-400
                    group-hover:translate-x-1
                    transition
                  "
                />
              </div>

              <h2
                className="
                  text-3xl
                  font-bold
                  mb-3
                "
              >
                Providers
              </h2>

              <p
                className="
                  text-gray-500
                  leading-relaxed
                "
              >
                Manage suppliers, provider information, updates and inventory
                relations.
              </p>

              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-blue-600
                  font-medium
                "
              >
                Open providers module
              </div>
            </div>
          </Link>

          {/* PRODUCTS */}

          <Link href="/products">
            <div
              className="
                group
                bg-white
                rounded-3xl
                shadow
                hover:shadow-2xl
                transition-all
                duration-300
                p-8
                cursor-pointer
                border
                border-transparent
                hover:border-green-100
                h-full
              "
            >
              <div
                className="
                  flex
                  justify-between
                  items-start
                  mb-8
                "
              >
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-green-50
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Package size={34} />
                </div>

                <ArrowRight
                  className="
                    text-gray-400
                    group-hover:translate-x-1
                    transition
                  "
                />
              </div>

              <h2
                className="
                  text-3xl
                  font-bold
                  mb-3
                "
              >
                Products
              </h2>

              <p
                className="
                  text-gray-500
                  leading-relaxed
                "
              >
                Explore product catalog, monitor items and keep information
                updated in real time.
              </p>

              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-green-600
                  font-medium
                "
              >
                Open products module
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
