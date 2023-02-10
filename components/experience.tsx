import { Box, List, ListItem, Stack, Typography } from "@mui/material"

const Experience = () => {
  return (
    <Box>
      <Typography variant='h6' fontWeight='bold'>
        WORK EXPERIENCE
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Stack spacing={2} sx={{ ml: 5 }}>
          <Typography variant='body1'>
            SWIFTLET (2019 - PRESENT)
          </Typography>
          <Box>
            <Stack sx={{ ml: 1 }}>
              <Typography>Terebinth ERP</Typography>
              <List>
                <ListItem>
                  - Design and developed both frontend and
                  backend of Terebinth ERP
                </ListItem>
                <ListItem>
                  - Developed RPA feature and Document
                  Generate of Terebinth ERP
                </ListItem>
                <ListItem>
                  - Using Ruby on Rails, React.js, MongoDB
                </ListItem>
              </List>

              <Typography>Thaicom Satellite</Typography>
              <List>
                <ListItem>
                  - Developed display area of satellite signal
                </ListItem>
                <ListItem>
                  - Using React.js
                </ListItem>
              </List>

              <Typography>Data Pipeline</Typography>
              <List>
                <ListItem>
                  - Design and Develop both frontend and
                  backend of Data Management and
                  Automatic Data Processing System
                </ListItem>
                <ListItem>
                  - Using Django, Next.js, PostgreSQL
                </ListItem>
              </List>

              <Typography>Legal Easy</Typography>
              <List>
                <ListItem>
                  - Design and Develop both frontend and
                  backend of Indictment Management
                  System and Document Generate System
                </ListItem>
                <ListItem>
                  - Using Django, Next.js, PostgreSQL
                </ListItem>
              </List>

              <Typography>Garn Enterprise</Typography>
              <List>
                <ListItem>
                  - Developed both frontend and backend of E-commerce System
                </ListItem>
                <ListItem>
                  - Using Ruby on Rail, Next.js, PostgreSQL
                </ListItem>
              </List>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Experience