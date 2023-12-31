import { Grid, Paper, Typography, Button, Box } from "@mui/material";
import homeoroffice from "../../../assets/Cta/athomeorattheoffice.jpg";

const imgstyle ={
  borderRadius: '6px'
}

const CallToActionOffice = () => {
  return (
    <Paper>
      <Grid pt={1} pl={1} pr={1} container>
        <Grid item xs={12} md={4}>
          <Box>
            <img style={imgstyle} src={homeoroffice} width={"100%"} alt="" />
          </Box>
        </Grid>
        <Grid display={"flex"}   item xs={12} md={8}>
          <Box display={"grid"}  sx={{ padding: 3, }}>
            <Typography
              color={"primary.black2"}
              fontFamily={"Nunito, sans-seriff"}
              fontWeight={600}
              textTransform={"uppercase"}
              fontSize={{ xs: 24, lg: 42, sm: 26, md: 29 }}
            >
              At Home or at the office?
            </Typography>
            <Typography
              mt={{ xs: 2, lg: "2vw" }}
              mb={10}
              fontSize={{ xs: 17, md: 20, xl: 20 }}
              color={"primary.grey2"}
              fontWeight={300}
            >
              Chat with a Pharmacist, review your medication, order drugs,
              refill your prescription and lots more enjoy convivence and good
              health at your fingertips.
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
            >
              <Button
                size="large"
                sx={{ textTransform: "none" }}
                variant="contained"
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CallToActionOffice;
