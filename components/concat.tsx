import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

const Concat = () => {
  return (
    <Box>
      <Typography variant='h6' sx={{ color: 'white' }}>
        CONCAT
      </Typography>
      <List sx={{ color: 'white' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PhoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary='Phone' 
            secondary={<Typography color='white'>0846693885</Typography>} 
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary='Email'
            secondary={<Typography color='white'>aekkapon.jb@gmail.com</Typography>}  
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <HomeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary='Address'
            secondary={
              <Typography color='white'>
                28 PrachachuenNonthaburi 7, Bangkhen
                Sub-district, Mueang District, Nonthaburi
                Province 11000
              </Typography>
            }  
          />
        </ListItem>
      </List>
    </Box>
  )
}

export default Concat