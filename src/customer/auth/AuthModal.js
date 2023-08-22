import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useLocation } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AuthModal = ({ handleClose, open }) => {
    const location = useLocation();
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {location.pathname === "/login" ? <LoginForm style={style}/>  : <RegisterForm style={style}/>}
                
            </Modal>
        </div>
    )
}

export default AuthModal