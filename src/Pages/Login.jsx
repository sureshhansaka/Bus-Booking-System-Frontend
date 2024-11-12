import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();
    const handleSignupRedirect = () => {
        navigate('/signup');
      };

  return (
    <Box
      component="form"
      sx={{ display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        minHeight: '70vh',
         '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" fontWeight="bold" fontFamily="arial" align="center">
        Admin Login
      </Typography>

      <TextField id="username" label="Username" variant="outlined" />
      <TextField id="password" label="Password" type="password" autoComplete="current-password" />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Login
        </Button>

      <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
        Register Your Bus
        <Button color="primary" onClick={handleSignupRedirect}>
          Sign up
        </Button>
      </Typography>
    </Box>
  );
}

