import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../state/cart/Action'

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart } = useSelector(store => store);
    
    const handleCheckout = () => {
        navigate('/checkout?step=2')
    }

    useEffect(() => {
        dispatch(getCart());
        // console.log("GET CART ALL ITEMS: ", cart) 
    }, [cart?.updateCartItem, cart?.deleteCartItem])

    return (
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 px-2 relative'>
                <div className='col-span-2'>
                    {cart.cart && cart.cart?.cartItems.map((item) => <CartItem key={item?.id} item={item}/>)}
                </div>

                <div className='lg:px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border p-4  mt-3'>
                        <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                        <hr />

                        <div className='space-y-3 font-semibold'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>{cart.cart?.totalPrice}</span>
                            </div>

                            <div className='flex justify-between pt-3'>
                                <span>Discount</span>
                                <span className='text-green-600'>{cart.cart?.discount}</span>
                            </div>
                            <div className='flex justify-between pt-3'>
                                <span>Delivery Charge</span>
                                <span className='text-green-600'>4655</span>
                            </div>
                            <div className='flex justify-between pt-3 font-bold'>
                                <span>Total Amount</span>
                                <span className='text-green-600'>INR {cart.cart?.totalDiscountedPrice}</span>
                            </div>
                        </div>

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
    )
}

export default Cart