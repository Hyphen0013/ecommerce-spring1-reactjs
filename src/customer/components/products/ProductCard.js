import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    return (

        <div
            className='productCard w-[17rem] m-3 transition-all cursor-pointer  rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>'
            onClick={() => navigate(`/product/${product.id}`)}
        >
            <div className='h-[20rem]'>
                <img
                    src={product.imageUrl}
                    alt=""
                    className='h-full w-full object-cover object-left-top'
                />
            </div>

            <div className="textPart bg-white p-3">
                <p className='font-bold opacity-60'>{product.brand}</p>
                <p>{product.title}</p>
            </div>
            <div className='flex items-center space-x-2 p-4'>
                <p className='font-semibold'>INR {product.discountedPrice}</p>
                <p className='line-through opacity-50'>INR {product.price}</p>
                <p className='text-green-600 font-semibold'>{product.discountPercent}% off</p>
            </div>
        </div>
    )
}

export default ProductCard