import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "@/components/root-layout";
import { initPosthog } from "@/lib/posthog";

const HomePage = () => import("@/pages/home");
const ProductsPage = () => import("@/pages/products");
const ProcessPage = () => import("@/pages/process");
const AboutPage = () => import("@/pages/about");
const BlogPage = () => import("@/pages/blog");
const ContactPage = () => import("@/pages/contact");

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      { index: true, lazy: HomePage },
      { path: "products", lazy: ProductsPage },
      { path: "process", lazy: ProcessPage },
      { path: "about", lazy: AboutPage },
      { path: "blog", lazy: BlogPage },
      { path: "contact", lazy: ContactPage },
    ],
  },
]);

export default function App() {
  useEffect(() => {
    initPosthog();
  }, []);

  return <RouterProvider router={router} />;
}
