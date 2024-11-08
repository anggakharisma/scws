"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState, useEffect } from 'react';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

type FormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)

  }, [])
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <>
      {
        isClient &&
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          position='relative'
          sx={{
            width: '100%',
            maxWidth: 400,
            px: 4,
            py: 8,
            border: '1px solid #ddd',
            borderRadius: 2,
            boxShadow: "2px 8px 10px rgba(0,0,0,0.09)"
          }}
        >
          <p onClick={() => router.back()} className='absolute -right-4 -top-4 bg-red-500 text-white font-bold flex justify-center items-center rounded-full w-10 h-10 text-center hover:cursor-pointer'>
            X
          </p>
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
            sx={{
              mb: 4
            }}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Box>
      }
    </>
  )
}
