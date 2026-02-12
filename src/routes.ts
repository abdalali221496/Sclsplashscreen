import { createBrowserRouter } from "react-router";
import SplashDark from "./components/SplashDark";
import SplashLight from "./components/SplashLight";

export const router = createBrowserRouter([
  {
    path: "/Sclsplashscreen/dark",
    Component: SplashDark,
  },
  {
    path: "/Sclsplashscreen/light", 
    Component: SplashLight,
  },
  {
    path: "/Sclsplashscreen/",
    Component: SplashDark, // ডিফল্ট হিসেবে ডার্ক মোড
  },
  {
    path: "*",
    Component: SplashDark, // 404 fallback
  },
]);
