import Hero from "./HomeComponents/Hero";
import CallToAction from "./HomeComponents/CallToAction";
import AdSection from "./HomeComponents/AdSection";
import { Grid, Box } from "@mui/material";

const Body = () => {
  return (
    <>
      <Hero></Hero>
      <CallToAction></CallToAction>
      <Box m={"0 auto"} maxWidth={"1300px"}>
        <Grid
          pt={{ xs: 10, md: 25 }}
          pr={1}
          m={"0 auto"}
          maxWidth={"95vw"}
          container
          spacing={2}
        >
          <Grid xs={12} sm={6} md={12} item>
            <AdSection></AdSection>
          </Grid>
          <Grid xs={6} display={{ xs: "none", sm: "initial" }} md={12} item>
            <AdSection></AdSection>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Body;
