import { createBrowserRouter } from "react-router";
import SplashDark from "./components/SplashDark";
import SplashLight from "./components/SplashLight";

export const router = createBrowserRouter([
  {
    path: "/dark",
    Component: SplashDark,
  },
  {
    path: "/light",
    Component: SplashLight,
  },
  {
    path: "/",
    Component: SplashDark, // ডিফল্ট হিসেবে ডার্ক মোড
  },
]);
