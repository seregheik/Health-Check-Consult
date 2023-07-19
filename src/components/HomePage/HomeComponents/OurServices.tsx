import { Grid, Typography, Box } from "@mui/material";
import services from "../../../assets/Cta/unsplash_byGTytEGjBo.jpg";
import drugsicon from "../../../assets/Cta/icon _drugs_.png";
import locicon from "../../../assets/Cta/icon _location bold_.png";
import phoneicon from "../../../assets/Cta/icon _phone_.png";

const OurServices = () => {
  const imgstyle = {
    width: "40px",
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${services})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Grid
        sx={{ background: "rgba(39,62,84,0.5)" }}
        container
        color={"rgba(255, 255, 255, 1)"}
      >
        <Grid xs={12}  item>
          <Typography
          fontFamily={"Nunito, Roboto"}
          fontWeight={600}
            fontSize={{ xs: 18, sm: 23 }}
            pt={3}
            pb={3}
            textAlign={"center"}
          >
            OUR SERVICES
          </Typography>
        </Grid>
        <Grid
          p={4}
          pt={{ xs: 1, sm: 4 }}
          direction={{ xs: "column", sm: "row" }}
          container
        >
          <Grid xs={3} sm={4} textAlign={"left"} item>
            <img style={imgstyle} src={drugsicon} alt="" />
            <Typography
              fontWeight={600}
              fontSize={{ xs: 23, sm: 30, md: 25 }}
              fontFamily={"Nunito, Roboto"}
            >
              Pharmacy
            </Typography>
            <Typography pt={{ xs: 0, sm: 4, md: 5 }} fontWeight={300} fontSize={{ xs: 14, sm:16, md:18 }}>
              Buy OTC medication and Prescription Medicine and have it delivered
              to your doorstep
            </Typography>
          </Grid>
          <Grid xs={3} sm={4} textAlign={"center"} item>
            <img style={imgstyle} src={locicon} alt="" />
            <Typography
              fontWeight={600}
              fontSize={{ xs: 23, sm: 30, md: 25 }}
              fontFamily={"Nunito, Roboto"}
            >
              Locate nearest pharmacies
            </Typography>
            <Typography pt={{ xs: 0, sm: 4, md: 5 }} fontWeight={300} fontSize={{ xs: 14, sm:16, md:18 }}>
              Locate the nearest pharmacies near you with the medication you are
              searching for
            </Typography>
          </Grid>
          <Grid xs={3} sm={4} textAlign={"right"} item>
            <img src={phoneicon} style={imgstyle} alt="" />
            <Typography
              fontWeight={600}
              fontSize={{ xs: 23, sm: 30, md: 25 }}
              fontFamily={"Nunito, Roboto"}
            >
              Chat with a Pharmacist
            </Typography>
            <Typography pt={{ xs: 0, sm: 4, md: 5 }} fontWeight={300} fontSize={{ xs: 14, sm:16, md:18 }}>
              Have your medication related questions answered directly by a
              pharmacist
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurServices;
