import {
  Box,
  Grid,
  Button,
  IconButton,
  Badge,
  Typography,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1, boxShadow: 1 }}>
      <Grid
        pl={{ xs: 0, sm: 6 }}
        pr={3}
        container
        display={"flex"}
        alignItems={"center"}
        spacing={1}
      >
        <Grid item xs={2} sm={1}>
          <IconButton size="large">
            <MenuOutlinedIcon fontSize="large" color="primary" />
          </IconButton>
        </Grid>
        <Grid item xs={2} sm={3}>
          <Button
            key={"Pharmacy"}
            sx={{ textTransform: "none" }}
            startIcon={<LocationOnOutlinedIcon />}
          >
            <Typography
              fontSize={"inherit"}
              display={{ xs: "none", sm: "initial" }}
            >
              Pharmacies
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            sx={{ textTransform: "none" }}
            startIcon={<NotificationsActiveOutlinedIcon fontSize="large" />}
          >
            <Typography
              fontSize={"inherit"}
              display={{ xs: "none", sm: "initial" }}
            >
              Notifications
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={1}>
          <IconButton>
            <Badge badgeContent={3} color="primary">
              <ShoppingCartOutlinedIcon fontSize="medium" color="primary" />
            </Badge>
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton>
            <AccountCircleOutlinedIcon fontSize="medium" color="primary" />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton>
            <HelpOutlineOutlinedIcon fontSize="medium" color="primary" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navigation;
