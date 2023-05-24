import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  NavLink
} from "react-router-dom";
// import all the pages
import {
  Dashboard,
  CustomerList,
  ProductList,
  CreateProduct,
  OrderList,
  Invoices,
} from "./pages/allPages/allPages";
// import all the components
import {
  SideLayout,
  TopLayout,
} from "./components/allComponents/allComponents";
// importing global styles
import "./styles/globalStyles.css";
function App() {
  // making routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<SideLayout />}>
          <Route path="/" element={<TopLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customer/list" element={<CustomerList />} />
            <Route path="products/list" element={<ProductList />} />
            <Route path="products/create" element={<CreateProduct />} />
          <Route path="order/list" element={<OrderList />} />
          <Route path="invoices" element={<Invoices />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <h1>
              Page Not Found <NavLink to="/">Go back to the website</NavLink>{" "}
            </h1>
          }
        />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
