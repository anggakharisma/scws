"use client"

import { AppBar, Box, Breadcrumbs, Button, CssBaseline, Link, Toolbar, Typography } from "@mui/material";
import NavUser from "./user/Navbar";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { NavigateNext } from "@mui/icons-material";

const drawerWidth = 240;
export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient()

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{
            flexGrow: 1
          }}>
            <Breadcrumbs separator={<NavigateNext />} aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/portals/dashboard">
                SCWS
              </Link>
              <Typography sx={{ color: 'text.primary' }}>Portals</Typography>
            </Breadcrumbs>
          </Typography>
          <Button color="inherit" onClick={async () => {
            await supabase.auth.signOut()
            redirect('/')
          }}>Logout</Button>
        </Toolbar>
      </AppBar>
      <NavUser />
      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 4 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
