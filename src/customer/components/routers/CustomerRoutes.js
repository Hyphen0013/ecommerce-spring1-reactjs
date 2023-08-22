import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/homePage/HomePage'
import Cart from '../cart/Cart'
import Navigation from '../navigation/Navigation'
import Footer from '../footer/Footer'
import Product from '../products/Product'
import ProductDetails from '../productDetails/ProductDetails'
import Checkout from '../checkout/Checkout'
import Order from '../order/Order'
import OrderDetails from '../order/OrderDetails'
import PaymentSuccess from '../payment/PaymentSuccess'

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
        <Route path="/payments/:orderId" element={<PaymentSuccess />} />
      </Routes>
      
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default CustomerRoutes