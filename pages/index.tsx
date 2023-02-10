import { Avatar, Box, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material'
import Experience from '@/components/experience';
import Skills from '@/components/skill';
import Concat from '@/components/concat';
import About from '@/components/about';

export default function Home() {
  return (
    <Grid container>
      <Grid item xl={4} sx={{ bgcolor: '#404040', p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent:'center'}}>
          <Avatar src='/pic.jpg' sx={{ width: '20vw', height: '20vw' }} />
        </Box>
        <Stack
          justifyContent='center'
          sx={{ p: 4 }}
          spacing={3}
        >
          <About />
          <Divider sx={{ bgcolor: 'white' }} />
          <Concat />
        </Stack>
      </Grid>
      <Grid item xl sx={{ p: 2 }}>
        <Stack
          justifyContent='center'
          sx={{ p: 4 }}
          spacing={3}
        >
          <Experience />
          <Divider />
          <Skills />
        </Stack>
      </Grid>
    </Grid>
  )
}
