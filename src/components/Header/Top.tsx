import { Grid, Box, Button, Stack } from "@mui/material";
import logo from "../../assets/headericons/HCC.png";

const Top = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid height={{ sm: 114, xs: 68 }} container spacing={2}>
                <Grid
                    // height={{ sm: 114, xs: 68 }}
                    display={"flex"}
                    justifyContent={"flex-start"}
                    item
                    xs={6}
                >
                    <Stack
                        width={{ xs: 150, md: 246 }}
                        display={"flex"}
                        p={{ xs: 1, md: 3 }}
                        justifyContent={"center"}
                    >
                        <img src={logo} alt="Health Check Consult" />
                    </Stack>
                </Grid>
                <Grid
                    height={{ sm: 114, xs: 68 }}
                    item
                    display={"flex"}
                    justifyContent={"flex-end"}
                    xs={6}
                >
                    <Stack
                        display={"flex"}
                        justifyContent={"center"}
                        p={{ xs: 1, md: 3 }}
                    >
                        <Button size='small' sx={{ textTransform: "none" }} variant="contained">
                            Get Started
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Top;
