import { Grid, Typography, Button, Box } from "@mui/material";
import prescriptionimg from "../../../assets/Cta/prescription.jpg";
import prescsvg from "../../../assets/Cta/prescsvg.svg";

const HowDoesThisWork = () => {
  return (
    <Grid display={"flex"} alignItems={"center"} container>
      <Grid
        item
        p={10}
        color={'#fff'}
        sx={{ backgroundImage: `url(${prescriptionimg})`, backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center", }}
        xs={12}
        md={6}
      >
        <Typography fontSize={40} textAlign={"center"}>Order with Prescription</Typography>
        <Typography>
        <img width={60} src={prescsvg} alt="" />
          Upload a photo of your prescription to the pharmacy and your
          medication will be delivered
        </Typography>
        <Box display={"flex"} flexDirection={"row-reverse"}>
        <Button variant="contained">Upload Prescription</Button></Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography>How does this work?</Typography>
        <Typography>Upload a photo/document of the prescription</Typography>
        <Typography>
          Confirm the delivery address and make required payments
        </Typography>
        <Typography>you receive a call to confirm the medication</Typography>
        <Typography>
          Sit back and relax, and wait for the medication to arrive at your
          doorsteps
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HowDoesThisWork;
