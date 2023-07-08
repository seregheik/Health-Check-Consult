import { Grid, Typography, Button, Box } from "@mui/material";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";

const CallToAction = () => {
  return (
    <Box mt={16} pl={5} pr={5}>
      <Grid
        container
        boxShadow={2}
        maxWidth={950}
        // minHeight={80}
        alignItems={"center"}
        textAlign={"center"}
        m={"0 auto"}
      >
        <Grid item display={{xs:'none', realsmall:'initial'}} xs={4}>
          <Button
            sx={{ textTransform: "none", height: 80 }}
            fullWidth={true}
            startIcon={<MedicationOutlinedIcon fontSize="large" />}
          >
            <Typography fontFamily={"Nunito, sans-serif"} fontSize={{xs:11, sm:14}}>
            Refill Your Prescriptions
            </Typography>
          </Button>
        </Grid>
        <Grid display={{realsmall:'none'}} item xs={4}>
          <Button
            sx={{ textTransform: "none", height: 80 }}
            fullWidth={true}
          >
            <Typography fontFamily={"Nunito, sans-serif"} fontSize={{xs:11}}>
            Refi Your Prescriptions
            </Typography>
          </Button>
        </Grid>
        <Grid item display={{xs:'none', realsmall:'initial'}} xs={4}>
          <Button
            sx={{ textTransform: "none", height: 80 }}
            fullWidth={true}
            startIcon={<LocalShippingOutlinedIcon fontSize="large" />}
          >
            <Typography fontFamily={"Nunito, sans-serif"} fontSize={{xs:11, sm:14}}>
            Get your medication delivered
            </Typography>
          </Button>
        </Grid>
        <Grid display={{realsmall:'none'}} item xs={4}>
          <Button
            sx={{ textTransform: "none", height: 80 }}
            fullWidth={true}
          >
            <Typography fontFamily={"Nunito, sans-serif"} fontSize={{xs:11}}>
            Get your medication delivered
            </Typography>
          </Button>
        </Grid>
        <Grid item display={{xs:'none', realsmall:'initial'}} xs={4}>
          <Button
            sx={{ textTransform: "none", height: 80 }}
            fullWidth={true}
            startIcon={<AccessibilityNewOutlinedIcon fontSize="large" />}
          >
            <Typography fontFamily={"Nunito, sans-serif"} fontSize={{xs:11, sm:14}}>
              Free Consultations
            </Typography>
          </Button>
        </Grid>
        <Grid display={{realsmall:'none'}} item xs={4}>
          <Button
            sx={{ textTransform: "none", height: 80 }}
            fullWidth={true}
          >
            <Typography fontFamily={"Nunito, sans-serif"} fontSize={{xs:11}}>
              Free Consultations
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CallToAction;
