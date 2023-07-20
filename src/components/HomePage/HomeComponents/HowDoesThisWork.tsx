import { Grid, Typography, Button, Box } from "@mui/material";
import prescriptionimg from "../../../assets/Cta/prescription.jpg";
import prescsvg from "../../../assets/Cta/prescsvg.svg";

const HowDoesThisWork = () => {
  return (
    <Grid mt={10} display={"flex"} alignItems={"center"} container>
      <Grid
        item
        color={"#fff"}
        sx={{
          backgroundImage: `url(${prescriptionimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        xs={12}
        md={6}
      >
        <Grid
          p={{ xs: 4, sm: 6, md: 8, lg: 12, xl: 14 }}
          sx={{ background: "#0000009e" }}
          container
        >
          <Grid item pb={4} xs={12}>
            <Typography fontSize={{ xs: 25, sm: 30 }} textAlign={"center"}>
              Order with Prescription
            </Typography>
          </Grid>
          <Grid item xs={3} sm={2}>
            <img width={60} src={prescsvg} alt="" />
          </Grid>
          <Grid item xs={9} sm={10}>
            <Typography
              fontSize={{ xs: 14, sm: 19 }}
              fontFamily={"Nunito, sans-seriff"}
            >
              Upload a photo of your prescription to the pharmacy and your
              medication will be delivered
            </Typography>
          </Grid>
          <Grid
            pt={4}
            display={"flex"}
            justifyContent={"flex-end"}
            item
            xs={12}
          >
            <Button
              variant="contained"
              sx={{ textTransform: "none", fontFamily: "Nunito" }}
            >
              Upload Prescription
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid p={{ xs: 4, sm: 6, md: 8, lg: 12, xl: 14 }} item xs={12} md={6}>
        <Typography
          p={3}
          textAlign={"center"}
          fontFamily={"Nunito, sans-seriff"}
          fontSize={{ xs: 30 }}
        >
          How does this work?
        </Typography>
        <Box display={"flex"}>
          <Typography
            pr={2}
            fontFamily={"Nunito, sans-seriff"}
            color={"primary"}
          >
            1
          </Typography>
          <Typography fontFamily={"Nunito, sans-seriff"}>
            Upload a photo/document of the prescription
          </Typography>
        </Box>
        <Box pt={2} display={"flex"}>
          <Typography
            pr={2}
            fontFamily={"Nunito, sans-seriff"}
            color={"primary"}
          >
            2
          </Typography>
          <Typography fontFamily={"Nunito, sans-seriff"}>
            Confirm the delivery address and make required payments
          </Typography>
        </Box>
        <Box pt={2} display={"flex"}>
          <Typography
            fontFamily={"Nunito, sans-seriff"}
            pr={2}
            color={"primary"}
          >
            3
          </Typography>
          <Typography fontFamily={"Nunito, sans-seriff"}>
            You receive a call to confirm the medication
          </Typography>
        </Box>
        <Box pt={2} display={"flex"}>
          <Typography
            pr={2}
            fontFamily={"Nunito, sans-seriff"}
            color={"primary"}
          >
            4
          </Typography>
          <Typography fontFamily={"Nunito, sans-seriff"}>
            Sit back and relax, and wait for the medication to arrive at your
            doorsteps{" "}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HowDoesThisWork;
