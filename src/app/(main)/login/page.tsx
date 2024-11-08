import { Box } from '@mui/material';
import LoginForm from './LoginForm'

const LoginPage: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
    >
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
