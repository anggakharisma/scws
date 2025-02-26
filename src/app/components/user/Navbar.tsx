import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const drawerWidth = 240;
export default function NavUser() {
  const pathname = usePathname()

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Typography sx={{
        p: 2
      }} variant="h6" align="center">SCWS</Typography>
      <Divider />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {[
            { text: "Dashboard", path: "/portals/dashboard" },
            { text: "Report", path: "/portals/report" },
            { text: "E-Learning", path: "/portals/e-learning" },
          ].map((item, index) => (
            <Link href={item.path} key={item.text}>
              <ListItem key={item.text}>
                <ListItemButton selected={item.path === pathname}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
