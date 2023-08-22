import React, { useEffect } from 'react'
import AddressCard from '../addressCard/AddressCard'
import CartItem from '../cart/CartItem'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOrderById } from '../../../state/order/Action'
import PriceDetails from './PriceDetails'
import { createPayment } from '../../../state/payment/Action'

const OrderSummary = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParam = new URLSearchParams(location.search);
    const orderId = searchParam.get('order_id');

    const { order } = useSelector(store => store);
    
    useEffect(() => {
        dispatch(getOrderById(orderId));
        // console.log("Order Summary- ", order?.order[0]?.order?.shippingAddress);
        console.log("Order Summary- ", order);
    }, [orderId]);

    const handleCheckout = () => {
        dispatch(createPayment(orderId))
    }
    
    return (
        <div>
            <div>

                <div className='p-5 shadow-lg rounded-s-md border'>
                    <AddressCard shippingAddress={order?.order}/>
                </div>                  
                
                
                <div className='lg:grid grid-cols-3 lg:px-16 px-2 relative'>
                    <div className='col-span-2'>
                        {order?.order?.map((item) => <CartItem item={item}/>)}
                    </div>

                    <div className='lg:px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                        <div className='border p-4  mt-3'>
                            <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                            <hr />

                            <PriceDetails details={order?.order}/>

                            <Button
                                variant='container'
                                className='w-full'
                                sx={{ px: '2rem', py: '0.6rem', bgcolor: '#9155fc' }}
                                onClick={handleCheckout}
                            >
                                Checkout
                            </Button>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default OrderSummary