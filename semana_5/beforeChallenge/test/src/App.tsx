import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

import DashboardLayout
  from "./layout/DashboardLayout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

export default function App() {

  // =========================
  // CARRITO
  // =========================

  const [cart, setCart] =
    useState<any[]>([]);

  // =========================
  // DARK MODE
  // =========================

  const [darkMode, setDarkMode] =
    useState(false);

  // cargar carrito + tema
  useEffect(() => {

    const savedCart =
      localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    const savedTheme =
      localStorage.getItem("darkMode");

    if (savedTheme) {
      setDarkMode(
        JSON.parse(savedTheme)
      );
    }

  }, []);

  // guardar carrito
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  // guardar tema
  useEffect(() => {

    localStorage.setItem(
      "darkMode",
      JSON.stringify(darkMode)
    );

  }, [darkMode]);

  // =========================
  // THEME
  // =========================

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode:
          darkMode
            ? "dark"
            : "light",
      },
    }),
    [darkMode]
  );

  // =========================
  // CARRITO
  // =========================

  function addToCart(product: any) {

    setCart([
      ...cart,
      product
    ]);

  }

  function removeFromCart(
    indexToRemove: number
  ) {

    const updatedCart =
      cart.filter(
        (_item, index) =>
          index !== indexToRemove
      );

    setCart(updatedCart);

  }

  return (

    <ThemeProvider theme={theme}>

      <CssBaseline />

      <BrowserRouter>

        <DashboardLayout
          cartCount={cart.length}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        >

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/products"
              element={
                <Products
                  addToCart={addToCart}
                />
              }
            />

            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  removeFromCart={
                    removeFromCart
                  }
                />
              }
            />

          </Routes>

        </DashboardLayout>

      </BrowserRouter>

    </ThemeProvider>
  );
}