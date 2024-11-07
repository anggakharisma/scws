"use client"
import { Box } from '@mui/material';
import LoginForm from './LoginForm'

const LoginPage: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
