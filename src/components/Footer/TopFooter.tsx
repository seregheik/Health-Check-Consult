import { Grid, Typography, Link } from "@mui/material";

const TopFooter = () => {
  return (
    <Grid container pl={"10%"} pr={"10%"}>
      <Grid item xs={12}>
        <Grid 
        borderRadius={'16px 16px 0 0'}
          sx={{
            backgroundColor: "primary.peach",
          }}
          container
        >
          <Grid p={3} xs={4} item>
            <Typography
              fontWeight={600}
              fontSize={20}
              textAlign={"center"}
              fontFamily={"Nunito"}
            ><Link href="/partner" color={'primary.black2'} sx={{textDecoration:'none'}}>
              Find Nearest Pharmacies</Link>
            </Typography>
          </Grid>
          <Grid p={3} xs={4} item>
            <Typography
              fontWeight={600}
              fontSize={20}
              textAlign={"center"}
              fontFamily={"Nunito"}
            ><Link href="#" color={'primary.black2'} sx={{textDecoration:'none'}}>
              Upload Prescription</Link>
            </Typography>
          </Grid>
          <Grid p={3} xs={4} item>
            <Typography
              fontWeight={600}
              fontSize={20}
              textAlign={"center"}
              fontFamily={"Nunito"}
            ><Link href="#" color={'primary.black2'} sx={{textDecoration:'none'}}>
              Register Your Pharmacy</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TopFooter;
