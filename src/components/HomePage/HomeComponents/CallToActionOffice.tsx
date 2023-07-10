import { Grid, Paper, Typography, Button, Box } from "@mui/material";
import homeoroffice from "../../../assets/Cta/athomeorattheoffice.jpg";

const CallToActionOffice = () => {
  return (
    <Paper>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box>
            <img src={homeoroffice} width={"100%"} alt="" />
          </Box>
        </Grid>
        <Grid display={"flex"} item xs={12} md={6}>
          <Box display={"grid"} sx={{ padding: 3 }}>
            <Typography
              color={"primary.black2"}
              fontFamily={"Nunito, sans-seriff"}
              fontWeight={600}
              fontSize={{ xs: 30, lg: 50, sm: 34, md: 37 }}
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
