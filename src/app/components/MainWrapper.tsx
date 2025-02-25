import { AppBar, Box, Button, CssBaseline, Toolbar, Typography } from "@mui/material";
import NavUser from "./user/Navbar";

const drawerWidth = 240;
export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
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
            SCWS
          </Typography>
          <Button color="inherit">Logout</Button>
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
