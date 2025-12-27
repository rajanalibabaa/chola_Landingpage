import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const PopupSnackbar = ({ open, message, severity = 'info', onClose, autoHideDuration = 1000 }) => {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
    >
      <Alert
        onClose={onClose}
        severity={severity} 
        sx={{
          width: '100%',
          borderRadius: 2,
          boxShadow: 6,
          fontSize: 16,
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default PopupSnackbar;
