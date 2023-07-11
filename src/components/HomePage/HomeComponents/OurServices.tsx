import { Grid, Typography, Box } from "@mui/material";
import services from "../../../assets/Cta/unsplash_byGTytEGjBo.jpg";
import drugsicon from "../../../assets/Cta/icon _drugs_.svg";

const OurServices = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${services})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Grid sx={{background: 'rgba(39,62,84,0.5)',
}} container color={"rgba(255, 255, 255, 1)"}>
        <Grid xs={12} item>
          <Typography pt={3} pb={3} textAlign={"center"}>
            OUR SERVICES
          </Typography>
        </Grid>
        <Grid p={4} container>
          <Grid xs={4} item>
            <img src={drugsicon} alt="" />
            <Typography>Pharmacy</Typography>
            <Typography>
              Buy OTC medication and Prescription Medicine and have it delivered
              to your doorstep
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurServices;
