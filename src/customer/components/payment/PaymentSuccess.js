import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { getOrderById } from '../../../state/order/Action';
import { updatePayment } from '../../../state/payment/Action';
import { Alert, AlertTitle, Grid } from '@mui/material';
import OrderTracker from '../order/OrderTracker';
import AddressCard from '../addressCard/AddressCard';

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referencedId, setReferencedId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();

  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector(store => store);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);

    // setPaymentId(urlParam.get("razorpay_payment_link_id"));
    // setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
  }, [])


  useEffect(() => {
    const data = { paymentId, orderId }
    console.log("Payment SUccess: ", order);
    dispatch(getOrderById(orderId));
    dispatch(updatePayment(data));
  }, [orderId, paymentId])
  return (
    <div className='px-2 lg:px-36 py-10'>
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant='filled'
          severity='success'
          sx={{ mb: 6, width: 'fit-content' }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          CONGRATULATION! Your Order Get Placed.
        </Alert>
      </div>

      <OrderTracker activeStep={1} />
      <Grid container className='space-y-1 py-5 pt-20'>
        <Grid
          container
          item className='shadow-xl rounded-md p-5'
          sx={{alignItems: "center", justifyContent: "space-between"}}
        >
          <Grid item xs={6}>
            <div className='flex flex-center'>
              <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="" />

              <div className='ml-5 space-y-2'>
                <p>Item title</p>
                <div className='opacity-50 text-xs font-semibold space-x-5'><span className='font-extrabold'>Color: </span> White</div>
                <div><span>Size: </span> XS</div>

                <p>Seller : item.brand</p>
                <p>INR price</p>
              </div>
            </div>
          </Grid>

          <Grid item>
            <AddressCard />
          </Grid>
          
        </Grid>
      </Grid>
    </div>
  )
}

export default PaymentSuccess