import { Link } from "react-router-dom";

import {
  Activity,
  Package,
  Truck,
  ArrowRight,
} from "lucide-react";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center">
            <Activity size={34} />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Collaborative management system
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/provider">
            <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all p-8 border border-gray-100">
              <div className="flex justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <Truck size={34} />
                </div>

                <ArrowRight className="text-gray-400 group-hover:translate-x-1 transition" />
              </div>

              <h2 className="text-3xl font-bold mb-3">
                Providers
              </h2>

              <p className="text-gray-500">
                Manage suppliers and provider information.
              </p>
            </div>
          </Link>

          <Link to="/products">
            <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all p-8 border border-gray-100">
              <div className="flex justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <Package size={34} />
                </div>

                <ArrowRight className="text-gray-400 group-hover:translate-x-1 transition" />
              </div>

              <h2 className="text-3xl font-bold mb-3">
                Products
              </h2>

              <p className="text-gray-500">
                View and manage product catalog.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}