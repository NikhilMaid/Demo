import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./globals.css";
import Home from "./Pages/Home";
import Layout from "./Layout";
import About from "./Pages/About";
import Categories from "./Pages/Categories";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Categories",
        element: <Categories />,
      },
      {
        path: "Cart",
        element: <Cart />,
      },
      {
        path: "Shop",
        element: <Shop />,
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="About" element={<About />} />
//       <Route path="Shop" element={<Shop />} />
//       <Route path="Categories" element={<Categories />} />
//       <Route path="Cart" element={<Cart />} />
//     </Route>
//   )
// );

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
