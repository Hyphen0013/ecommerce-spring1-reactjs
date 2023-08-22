import Cart from "./customer/components/cart/Cart";
import Checkout from "./customer/components/checkout/Checkout";
import OrderSummary from "./customer/components/checkout/OrderSummary";
import Footer from "./customer/components/footer/Footer";
import Navigation from "./customer/components/navigation/Navigation";
import Order from "./customer/components/order/Order";
import OrderDetails from "./customer/components/order/OrderDetails";
import ProductDetails from "./customer/components/productDetails/ProductDetails";
import Product from "./customer/components/products/Product";
import CustomerRoutes from "./customer/components/routers/CustomerRoutes";
import HomePage from "./customer/pages/homePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">

      <Router>
        <Routes>
          <Route path="/*" element={<CustomerRoutes />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
