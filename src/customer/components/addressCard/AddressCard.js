import React from 'react'

const AddressCard = ({shippingAddress}) => {
  // console.log("shipping address - ", shippingAddress[0]?.order?.shippingAddress)
  var address = shippingAddress && shippingAddress[0]?.order?.shippingAddress;
  return (
    <div>
        <div className='space-y-3'>
            <p className='font-semibold'>{address?.firstName} {address?.lastName}</p>
            <p className='text-gray-700'>{address?.streetAddress}</p>
            <p className='text-gray-700'>{address?.city}, {address?.state}</p>
            <div className='space-y-1'>
                <p className='font-semibold'>Phone Number</p>
                <p className='text-gray-700'>{address?.mobile}</p>
            </div>
        </div>
    </div>
  )
}

export default AddressCard