import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCartItem, updateCartItem } from '../../../state/cart/Action'

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    const handleUpdateCartItem = (num) => {
        const data = { quantity: Number(item?.quantity + num), cartItemId: item?.id };
        dispatch(updateCartItem(data));
    }

    const handleRemoveCartItem = () => {
        dispatch(removeCartItem(item?.id));
    }
    console.log("item ", item?.size)
    return (
        <div className='p-5 shadow-lg border rounded-md mt-3'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img 
                        src={item?.product?.imageUrl}
                        alt=""
                        className='w-full h-full object-cover object-fill'
                        style={{
                            objectFit: "contain",
                            width: "100%",
                            aspectRatio: 3/2,
                            mixBlendMode: "color"
                        }}
                    />
                </div>

                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>{item?.product?.title}</p>
                    <p className='opacity-70'>Size: {item.size ? item?.size : item?.product?.size}, White</p>
                    <p className='opacity-70 mt-2'>Seller: {item?.product?.brand}</p>

                    <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                        <p className="tracking-tight text-gray-900">{item.price ? item?.price : item?.product?.price}</p>
                        <p className="opacity-50 line-through">{item.totalDiscountedPrice ? item?.totalDiscountedPrice : item?.product?.totalDiscountedPrice}</p>
                        <p className="text-green-600 font-semibold">{item.discountedPercent ? item?.discountedPercent : item?.product?.discountedPercent}% off</p>
                    </div>                
                </div>
            </div>

            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton onClick={() => handleUpdateCartItem(-1)} disabled={item?.quantity <= 1}>
                        <RemoveCircleOutline />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>{item?.quantity}</span>
                    <IconButton onClick={() => handleUpdateCartItem(1)} disabled={item?.quantity >= 10}>
                        <AddCircleOutline />
                    </IconButton>
                </div>
                <div>
                    <Button onClick={handleRemoveCartItem}>Remove </Button>
                </div>
            </div>        
            
        </div>
    )
}

export default CartItem