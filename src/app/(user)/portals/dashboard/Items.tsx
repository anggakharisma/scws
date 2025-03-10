"use client";
import { Info, Warning } from "@mui/icons-material";
import { Divider, Grid2, Link, Stack, Typography } from "@mui/material";
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function DashboardItems() {
  return (
    <>
      <Typography variant="h4" sx={{
        mb: 2
      }}>Welcome back user</Typography>
      <Stack direction='row' spacing={1}>
        <Alert icon={<Warning fontSize="inherit" />} severity="warning">
          <strong>Math 101</strong>: Your <Link color="warning" href="/portals/dashboard">assignment</Link> is due soon
        </Alert>
        <Alert icon={<Warning fontSize="inherit" />} severity="warning">
          <strong>History</strong>: Your <Link color="warning" href="/portals/dashboard">assignment</Link> is due soon
        </Alert>
        <Alert icon={<Info fontSize="inherit" />} severity="info">
          <strong>English 2</strong>: Your <Link color="info" href="/portals/dashboard">E-Learning</Link> will start
        </Alert>
      </Stack>
      <Divider sx={{
        my: 2,
        mb: 4
      }} />
      <Grid2 container spacing={4} rowSpacing={4}>
        <Grid2 size={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Information
              </Typography>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum saepe recusandae temporibus repellat exercitationem eaque. Vitae modi tenetur at harum corrupti ab, in nostrum accusamus ad deserunt possimus numquam!</p>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 size={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Schedule
              </Typography>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum saepe recusandae temporibus repellat exercitationem eaque. Vitae modi tenetur at harum corrupti ab, in nostrum accusamus ad deserunt possimus numquam!</p>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </>
  )
}
