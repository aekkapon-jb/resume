import { Box, Grid, Typography } from "@mui/material"

const Skills = () => {
  return (
    <Box>
      <Typography variant='h6' fontWeight='bold'>
        SKILLS
      </Typography>
      <Grid container sx={{ mt: 1 }}>
        <Grid item xs={12} xl={4}>
          <Typography variant='body1'>React.js, Next.js, Redux</Typography>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Typography variant='body1'>Python, Django</Typography>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Typography variant='body1'>Ruby, Ruby on Rails</Typography>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Typography variant='body1'>HTML, Javascript, Typescript</Typography>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Typography variant='body1'>CSS, Bootstrap, Material-UI</Typography>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Typography variant='body1'>Docker, Kubernetes</Typography>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Typography variant='body1'>PostgreSQL</Typography>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Typography variant='body1'>MongoDB</Typography>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Typography variant='body1'>GIT</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Skills