import { createClient } from "@/utils/supabase/server";
import { Typography } from "@mui/material";

export default async function DashboardPage() {
  const supabase = await createClient()
  const user = await supabase.auth.getUser()
  console.log(user.data!.user?.id)
  return (
    <Typography variant="h5">Welcome back user</Typography>
  )
}
