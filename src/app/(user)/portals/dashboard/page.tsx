import { createClient } from "@/utils/supabase/server";
import { Container } from "@mui/material";
import DashboardItems from "./Items";

export default async function DashboardPage() {
  const supabase = await createClient()
  const user = await supabase.auth.getUser()
  console.log(user.data!.user?.id)
  return (
    <Container>
      <DashboardItems />
    </Container>
  )
}
