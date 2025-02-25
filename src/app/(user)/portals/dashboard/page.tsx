import { createClient } from "@/utils/supabase/server";
import { Button, Card, CardActions, CardContent, Container, Grid2, Typography } from "@mui/material";

const DashboardCard = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        {children}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )

}

export default async function DashboardPage() {
  const supabase = await createClient()
  const user = await supabase.auth.getUser()
  console.log(user.data!.user?.id)
  return (
    <Container>
      <Typography variant="h5">Welcome back user</Typography>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolor ullam iusto enim voluptate ut vero consectetur nisi sequi quia omnis, temporibus eaque officia consequuntur tenetur culpa magnam placeat recusandae!</p>
      <Grid2 container spacing={2}>
        <Grid2 size={4}>
          <DashboardCard title="Reports">
            <p></p>
          </DashboardCard>
        </Grid2>
        <Grid2 size={4}>
          <DashboardCard title="Schedule">
            <p></p>
          </DashboardCard>
        </Grid2>
        <Grid2 size={4}>
          <DashboardCard title="E-Learning">
            <p></p>
          </DashboardCard>
        </Grid2>
      </Grid2>
    </Container>
  )
}
