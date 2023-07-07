import { Box, Grid, Button, IconButton } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1, boxShadow:1 }}>
      <Grid height={{ sm: 114, xs: 68 }} pl={{ xs: 0, md: 6 }} pr={{ xs: 3, md: 6 }} container display={'flex'} alignItems={'center'} spacing={2}>
        <Grid item xs={1} >
          <IconButton size='large' ><MenuOutlinedIcon fontSize='large' color='primary'/></IconButton>
        </Grid>
        <Grid item xs={3}>
          <Button sx={{ textTransform: 'none' }} startIcon={<LocationOnOutlinedIcon />}>Pharmacies</Button>
        </Grid>
        <Grid item xs={2}>
          <Button sx={{ textTransform: 'none' }} startIcon={<NotificationsActiveOutlinedIcon fontSize='large' />}>Notifications</Button>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={1}>
          <IconButton>
            <ShoppingCartOutlinedIcon fontSize='medium' color='primary' />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton>
            <AccountCircleOutlinedIcon fontSize='medium' color='primary' />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton>
            <HelpOutlineOutlinedIcon fontSize='medium' color='primary' />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Navigation