"use client";
import { Button, Card, CardActions, CardContent, Divider, Grid2, Typography } from "@mui/material";

export default function DashboardItems() {
  return (
    <>
      <Typography variant="h4">Welcome back user</Typography>
      <Typography variant="body1">Something here like information</Typography>
      <Divider sx={{
        my: 2,
        mb: 4
      }} />
      <Grid2 container spacing={8} rowSpacing={4}>
        <Grid2 size={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>

            </CardContent>
            <CardActions>
              <Button size="small">Check Report Detail</Button>
            </CardActions>
          </Card>
        </Grid2>

        <Grid2 size={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h6">
                Schedule
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 size={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h6">
                Information
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

      </Grid2>
    </>
  )
}
