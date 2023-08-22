import { Button, ButtonGroup, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <Grid
                className='bg-black text-white text-center mt-10'
                container
                sx={{ bgcolor: 'black', color: 'white', py: '3' }}
            >
                
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-6' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-6' variant='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6'>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6'>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6'>Jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6'>Partner</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-6' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-6' variant='h6'>About</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6'>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6'>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6'>Jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6'>Partner</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-6' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-6' variant='h6'>About</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6'>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6'>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6'>Jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6'>Partner</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-6' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-6' variant='h6'>About</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6'>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6'>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6'>Jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6'>Partner</Button>
                    </div>
                </Grid>

                <Grid className='pt-20' item xs={12}>
                    <Typography variant="body2" component="p" align='center'>
                        &copy; 2023 My Company. All right reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align='center'>
                        Made with love by me
                    </Typography>
                    <Typography variant="body2" component="p" align='center'>
                        Icons made by{''}
                        <Link to="https://google.com" color='inherit' underline="always">
                            Google
                        </Link>
                    </Typography>
                </Grid>
                

            </Grid>
        </div>
    )
}

export default Footer