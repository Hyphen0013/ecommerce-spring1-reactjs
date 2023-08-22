import React from 'react'
import AddressCard from '../addressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { StarOutline } from '@mui/icons-material'

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className="font-semibold text-lg py-7">Delivery Address</h1>
            <AddressCard />
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>

        <Grid className='space-y-5' container>
            {[1,1,1,1,1,1].map((item) => (
                <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems: 'center', justifyContent: 'space-between'}}>

                    <Grid item xs={6}>
                        <div className='flex items-center space-x-4'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70" alt="" />

                            <div className='space-y-2 ml-5'>
                                <p className='text-gray-700'>Men Slim Mid Rise Black Jeans</p>
                                <p className='font-semibold'><span>Color: pink </span> <span> Size: M</span></p>
                                <p>Seller :linaria</p>
                                <p>INR 1099</p>
                            </div>
                        </div>                    
                    </Grid>

                    <Grid item>
                        <Box sx={{color: 'deepskyblue'}}>
                            <StarOutline sx={{fontSize: '2rem'}} className='px-2 text-5xl'/>
                            <span>Rate & Review Product</span>
                        </Box>
                    </Grid>
                    
                </Grid>
            ))}
        </Grid>
        
    </div>
  )
}

export default OrderDetails