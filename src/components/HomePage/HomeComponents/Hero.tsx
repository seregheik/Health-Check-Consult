import { Grid, Typography } from "@mui/material"


const Hero = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={6} pl={{ xs: 3, md: 8, lg:20 }} pr={{ xs: 3, md:10, lg:5 }}  >
                <Typography sx={{fontFamily:'Nunito,sans-serif'}} textAlign={{xs:'center', md:'left'}} lineHeight={1.3} color={'primary.dark'} pt={{ xs: 4, md: 6 }}  fontWeight={600} fontSize={{ xs: 20, md: 40, xl: 67 }}>
                    Find your medication,
                    and the nearest
                    pharmacies with ease
                </Typography>
                <Typography  sx={{fontFamily:'Nunito,sans-serif'}} color={'primary.light'} pt={2} lineHeight={1.2} fontWeight={400} textAlign={{xs:'center', md:'left'}} fontSize={{ xs: 15, md: 25, xl: 43 }} >
                    Health check consult is the first digital pharmacy service in Nigeria
                </Typography>
            </Grid>
            <Grid item xs={6}>
                Image goes here
            </Grid>
        </Grid>
    )
}

export default Hero