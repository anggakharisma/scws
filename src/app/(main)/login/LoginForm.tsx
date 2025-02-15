"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

type FormData = z.infer<typeof loginSchema>;

export default function LoginForm() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        position='relative'
        sx={{
          width: '100%',
          maxWidth: 400,
          px: 4,
          py: 4,
          border: '1px solid #ddd',
          borderRadius: 2,
          boxShadow: "2px 8px 10px rgba(0,0,0,0.09)"
        }}
      >
        <Box
          display="flex"
          flexDirection='column'
          gap={0}
        >
          <Typography align='center' variant="h6" gutterBottom>
            Enter Your Credentials
          </Typography>
          <Typography align='center' variant="body1" gutterBottom>
            Welcome back
          </Typography>
        </Box>
        <TextField
          autoFocus
          {...register('email')}
          label="Email"
          variant="outlined"
          margin="normal"
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
        />

        <TextField
          {...register('password')}
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          error={!!errors.password}
          helperText={errors.password?.message}
          fullWidth
          sx={{
            mb: 4
          }}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Box>
    </>
  )
}
