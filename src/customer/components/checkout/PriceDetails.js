import React from 'react'

const PriceDetails = ({details}) => {
    var detail = details && details[0];
    console.log(detail?.order?.totalPrice)
    return (
        <div className='space-y-3 font-semibold'>
            <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>{ detail?.order?.totalPrice }</span>
            </div>

            <div className='flex justify-between pt-3'>
                <span>Discount</span>
                <span className='text-green-600'>{ detail?.order?.discount }</span>
            </div>
            <div className='flex justify-between pt-3'>
                <span>Delivery Charge</span>
                <span className='text-green-600'>free</span>
            </div>
            <div className='flex justify-between pt-3 font-bold'>
                <span>Total Amount</span>
                <span className='text-green-600'>{ detail?.order?.totalDiscountedPrice }</span>
            </div>
        </div>
    )
}

export default PriceDetails