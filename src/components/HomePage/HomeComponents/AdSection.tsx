import { Grid, Box, Typography } from "@mui/material";
import adimage from "../../../assets/AdSection/unsplash_D44p6Ubx-9E.svg";

const AdSection = () => {
  return (
    <Box pt={0}>
      <Grid
        container
        direction={{ xs: "column-reverse", md: "row" }}
        sx={{
          backgroundImage: `url(${adimage})`,
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Grid item sx={{ backgroundColor: "#00000080" }} xs={4}>
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            p={8}
            alignContent={"center"}
            height={{ xs: 130, md: 200 }}
            fontFamily={"Roboto"}
          >
            <Typography
              fontSize={{ xs: 30, sm: 25 }}
              textAlign={"center"}
              fontWeight={600}
            >
              Perfect Clear
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 13, md: 16 }}
              fontWeight={300}
              textAlign={"center"}
              margin={1}
            >
              Fight Acne, with our ground breaking serum approved by
              dermatologist
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </Box>
  );
};

export default AdSection;
