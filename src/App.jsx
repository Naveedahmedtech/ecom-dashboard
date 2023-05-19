import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import all the pages
import { Dashboard, Customers, Products, Orders, Invoices } from './pages/allPages/allPages';
// import all the components
import { SideLayout, TopLayout } from './components/allComponents/allComponents' 
// importing global styles
import './styles/globalStyles.css'
function App() {
  // making routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SideLayout />}>
        <Route path="/" element={<TopLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="invoices" element={<Invoices />} />
        </Route>
      </Route>
    )
  );
  return <>
    <RouterProvider router={router}></RouterProvider>
  </>;
}

export default App;
