import { Box, CssBaseline, AppBar, Toolbar, Typography, Button } from "@mui/material";
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
        color="default"
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            SCWS
          </Typography>
          <Button color="inherit">Login</Button>

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
