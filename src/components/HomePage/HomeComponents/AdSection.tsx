import { Grid, Box, CardContent, Typography, Card, CardMedia } from "@mui/material";
import adimage from '../../../assets/AdSection/unsplash_D44p6Ubx-9E.svg'

const AdSection = () => {
  return (
    <Grid>
      <Grid>
        <Card sx={{ display: "flex" }}>
          <Box>
            <CardContent>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
          sx={{maxWidth:600}}
            component="img"
            image={adimage}
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default AdSection;
