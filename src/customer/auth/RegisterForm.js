import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getUser, register } from '../../state/auth/Action';

const RegisterForm = ({ style }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const jwt = localStorage.getItem("hyphen_JWT");
    const { auth } = useSelector( store => store )
    

    useEffect(() => {
        if(jwt) {
            dispatch(getUser(jwt));
        }
    }, [jwt, auth.jwt])

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password")
        }
        
        dispatch(register(userData));
    }

    return (
        <div>

            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" className='pb-3'>
                    Register Here
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                fullWidth
                                autoComplete='given-name'
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                fullWidth
                                autoComplete='given-name'
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                autoComplete='email'
                                type="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="password"
                                name="password"
                                label="Password"
                                fullWidth
                                autoComplete='password'
                                type="password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                className="w-full"
                                type="submit"
                                variant='contained'
                                size="large"
                                sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                <div className='flex justify-center flex-col items-center'>
                    <div className='mt-3 py-3 flex items-center'>
                        <p className='mr-2'>if you have already account? </p>
                        <Button onClick={() => navigate("/login")} className='ml-5' size="small">Login</Button>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default RegisterForm