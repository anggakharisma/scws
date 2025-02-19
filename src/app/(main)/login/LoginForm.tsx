"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { login } from './action';
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export type FormDataCustom = z.infer<typeof loginSchema>;

export default function LoginForm() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormDataCustom>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: FormDataCustom) => {
    await login(data)
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
          mt: 8,
          px: 4,
          py: 4,
          border: '1px solid #ddd',
          borderRadius: 2,
          backgroundColor: "white",
          boxShadow: "2px 8px 10px rgba(0,0,0,0.04)"
        }}
      >
        <Box
          display="flex"
          flexDirection='column'
          gap={0}
        >
          <Typography align='left' variant="h4" gutterBottom>Sign In</Typography>
          <Typography align='left' variant="body1" gutterBottom>Sign In</Typography>
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

        <Button className="bg-secondary text-white font-medium" type="submit" variant="contained" color="primary" size='large' fullWidth>
          Login
        </Button>
      </Box>
    </>
  )
}
