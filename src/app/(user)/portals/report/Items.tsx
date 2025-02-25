"use client";
import { Score, History } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, Divider, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
export default function DashboardItems() {
  return (
    <>
      <Typography variant="h4">Welcome back user</Typography>
      <Typography variant="body1">Something here like information</Typography>
      <Divider sx={{
        my: 2,
        mb: 4
      }} />
      <Grid2 container spacing={4} rowSpacing={4}>
        <Grid2 size={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h6">
                Report
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Score />
                    </ListItemIcon>
                    <ListItemText primary="Math" />
                    <ListItemText primary="56" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <History />
                    </ListItemIcon>
                    <ListItemText primary="History" />
                    <ListItemText primary="56" />
                  </ListItemButton>
                </ListItem>
              </List>
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
              <DateCalendar />
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
