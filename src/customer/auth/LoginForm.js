import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../state/auth/Action';

const LoginForm = ({ style }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get("email"),
            password: data.get("password")
        }

        dispatch(login(userData));
    }
    return (
        <div>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" className='pb-3'>
                    Login Here
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
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
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                <div className='flex justify-center flex-col items-center'>
                    <div className='mt-3 py-3 flex items-center'>
                        <p className='mr-2'>if you not registered! </p>
                        <Button onClick={() => navigate("/register")} className='ml-5' size="small">Register here</Button>
                    </div>
                </div>                
            </Box>
        </div>
    )
}

export default LoginForm