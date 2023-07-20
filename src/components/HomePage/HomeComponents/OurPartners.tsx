import { Grid, Typography } from "@mui/material";
import del from "../../../assets/Cta/del.png";

const imagesize = {
  maxWidth: "100%",
  height: "auto",
};

const OurPartners = () => {
  return (
    <Grid
    m={'0 auto'}
      container
    sx={{
      backgroundColor: 'f9f9f9',
      maxWidth:'1100px'
    }}
    p={5}
    pt={{xs:5, lg:15}}
    >
      <Grid xs={12} item>
        <Typography
          color={"primary.grey2"}
          fontWeight={600}
          fontSize={{ xs: 18, sm: 23 }}
          pt={3}
          pb={3}
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          Our Partners
        </Typography>
      </Grid>
      <Grid display={"flex"} p={2} flexWrap={"wrap"} item xs={3}>
        <img style={imagesize} src={del} alt="" />
      </Grid>
      <Grid display={"flex"} p={2} flexWrap={"wrap"} item xs={3}>
        <img style={imagesize} src={del} alt="" />
      </Grid>
      <Grid display={"flex"} p={2} flexWrap={"wrap"} item xs={3}>
        <img style={imagesize} src={del} alt="" />
      </Grid>
      <Grid display={"flex"} p={2} flexWrap={"wrap"} item xs={3}>
        <img style={imagesize} src={del} alt="" />
      </Grid>
    </Grid>
  );
};

export default OurPartners;
