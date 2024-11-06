"use client"
import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link'

// Define the login schema using Zod
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

// Define the form data type
type FormData = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  // Use the Zod resolver with react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        position='relative'
        sx={{
          width: '100%',
          maxWidth: 400,
          p: 4,
          border: '1px solid #ddd',
          borderRadius: 2,
          boxShadow: "2px 8px 10px rgba(0,0,0,0.09)"
        }}
      >
        <Link href="/" className='absolute -right-4 -top-4 bg-red-500 text-white font-bold flex justify-center items-center rounded-full w-10 h-10 text-center hover:cursor-pointer'>
          X
        </Link>
        <Box
          display="flex"
          flexDirection='column'
          gap={1}
        >
          <h1 className="text-3xl font-bold text-primary">SCWS</h1>
          <Typography variant="h6" gutterBottom>
            Enter your credentials
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
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
