"use client";

import { useState } from "react";

import { Package, Tag, Boxes, Star, DollarSign } from "lucide-react";

import EditProductModal from "./EditProductModal";

export default function ProductCard({ product }: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="
          bg-white
          rounded-3xl
          p-6
          shadow-md
          hover:shadow-2xl
          hover:-translate-y-1
          transition-all
          duration-300
          cursor-pointer
          border
          border-gray-100
          overflow-hidden
        "
      >
        {/* HEADER */}

        <div
          className="
            flex
            justify-between
            items-start
            gap-4
          "
        >
          <div className="flex-1 min-w-0">
            <h2
              className="
                text-2xl
                font-bold
                text-gray-900
                break-words
                line-clamp-2
              "
            >
              {product.name}
            </h2>

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2
                mt-2
              "
            >
              <div
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-blue-100
                  text-blue-700
                  text-xs
                  font-semibold
                  whitespace-nowrap
                "
              >
                Product
              </div>

              {product.is_active && (
                <div
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-green-100
                    text-green-700
                    text-xs
                    font-semibold
                    whitespace-nowrap
                  "
                >
                  Active
                </div>
              )}
            </div>
          </div>

          {/* ICON */}

          <div
            className="
              min-w-[56px]
              w-14
              h-14
              rounded-2xl
              bg-orange-100
              flex
              items-center
              justify-center
              shadow-sm
            "
          >
            <Package size={28} />
          </div>
        </div>

        {/* CONTENT */}

        <div
          className="
            mt-6
            space-y-4
          "
        >
          {/* CATEGORY */}

          <div
            className="
              flex
              items-center
              gap-3
              bg-gray-50
              rounded-2xl
              p-3
              overflow-hidden
            "
          >
            <div
              className="
                min-w-[40px]
                w-10
                h-10
                rounded-xl
                bg-white
                flex
                items-center
                justify-center
                shadow-sm
              "
            >
              <Tag size={18} />
            </div>

            <div className="min-w-0 flex-1">
              <p
                className="
                  text-xs
                  text-gray-500
                "
              >
                Categoría
              </p>

              <p
                className="
                  text-sm
                  font-medium
                  text-gray-800
                  break-words
                  line-clamp-1
                "
              >
                {product.category?.name || "Sin categoría"}
              </p>
            </div>
          </div>

          {/* PRESENTATION */}

          <div
            className="
              flex
              items-center
              gap-3
              bg-gray-50
              rounded-2xl
              p-3
              overflow-hidden
            "
          >
            <div
              className="
                min-w-[40px]
                w-10
                h-10
                rounded-xl
                bg-white
                flex
                items-center
                justify-center
                shadow-sm
              "
            >
              <Boxes size={18} />
            </div>

            <div className="min-w-0 flex-1">
              <p
                className="
                  text-xs
                  text-gray-500
                "
              >
                Presentación
              </p>

              <p
                className="
                  text-sm
                  font-medium
                  text-gray-800
                  break-words
                  line-clamp-2
                "
              >
                {product?.main_model?.presentation?.nickname ||
                  "Sin presentación"}
              </p>
            </div>
          </div>

          {/* PRICE */}

          <div
            className="
              flex
              items-center
              gap-3
              bg-gray-50
              rounded-2xl
              p-3
            "
          >
            <div
              className="
                min-w-[40px]
                w-10
                h-10
                rounded-xl
                bg-white
                flex
                items-center
                justify-center
                shadow-sm
              "
            >
              <DollarSign size={18} />
            </div>

            <div className="min-w-0">
              <p
                className="
                  text-xs
                  text-gray-500
                "
              >
                Precio
              </p>

              <p
                className="
                  text-sm
                  font-medium
                  text-gray-800
                  truncate
                "
              >
                ${product?.main_model?.presentation?.price || 0}
              </p>
            </div>
          </div>

          {/* RATING */}

          <div
            className="
              flex
              items-center
              gap-3
              bg-gray-50
              rounded-2xl
              p-3
              overflow-hidden
            "
          >
            <div
              className="
                min-w-[40px]
                w-10
                h-10
                rounded-xl
                bg-white
                flex
                items-center
                justify-center
                shadow-sm
              "
            >
              <Star size={18} />
            </div>

            <div className="min-w-0 flex-1">
              <p
                className="
                  text-xs
                  text-gray-500
                "
              >
                Rating
              </p>

              <p
                className="
                  text-sm
                  font-medium
                  text-gray-800
                  truncate
                "
              >
                {product.average_rating} ({product.rating_count} reviews)
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}

        <div
          className="
            mt-6
            pt-4
            border-t
            text-sm
            text-gray-400
            flex
            flex-col
            sm:flex-row
            gap-2
            sm:justify-between
            sm:items-center
            overflow-hidden
          "
        >
          <span className="truncate">Product ID: {product.id}</span>

          <span className="truncate">SKU: {product.sku || "N/A"}</span>
        </div>
      </div>

      {open && (
        <EditProductModal product={product} closeModal={() => setOpen(false)} />
      )}
    </>
  );
}
