import * as React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';

import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import mistry from '../images/mistry.png'
import arun from '../images/arun.png'
import ramkisun from '../images/ramkisun.png'
import img1 from '../images/img1.jpg'

export default function ProfileCard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      
    <Grid item xs={2} sm={4} md={4}>
      <ListItem alignItems="flex-start" style={{display:'flex',flexDirection:'column'}}>
        
        <CardMedia
        component="img"
        height="90%"
        style={{
            borderRadius: '50%', // Makes the image round
            width: '90%', // Adjust the width to match the height if needed
            height: '90%', // Ensure the height is consistent
            objectFit: 'cover', // Ensure the image covers the whole area
          }}

        image={mistry}
        alt="Paella dish"
      />
    
        <ListItemText
          primary=" Yadav"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'block' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                contact : 7057722778
                
              </Typography>
              {"Organisation Head "}
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>

      <Grid item xs={2} sm={4} md={4}>
      <ListItem alignItems="flex-start" style={{display:'flex',flexDirection:'column ' ,width:'100%'}}>
        
        <CardMedia
        component="img"
        height="90%"
        style={{
            borderRadius: '50%', // Makes the image round
            width: '90%', // Adjust the width to match the height if needed
            height: '90%', // Ensure the height is consistent
            objectFit: 'cover', // Ensure the image covers the whole area
          }}

        image={arun}
        alt="Paella dish"
      />
    
        <ListItemText
          primary="Arun Gupta"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'block' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                contact : 7057722778
              </Typography>
              {"Website Handler"}
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>



      <Grid item xs={2} sm={4} md={4}>
      <ListItem alignItems="flex-start" style={{display:'flex',flexDirection:'column ' ,width:'100%'}}>
        
        <CardMedia
        component="img"
        height="90%"
        style={{
            borderRadius: '50%', // Makes the image round
            width: '90%', // Adjust the width to match the height if needed
            height: '90%', // Ensure the height is consistent
            objectFit: 'cover', // Ensure the image covers the whole area
          }}

        image={ramkisun}
        alt="Paella dish"
      />
    
        <ListItemText
          primary="RamKisun Yadav"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'block' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                contact : 7057722778
              </Typography>
              {"Driving Manager"}
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>


      <Grid item xs={2} sm={4} md={4}>
      <ListItem alignItems="flex-start" style={{display:'flex',flexDirection:'column ' ,width:'100%'}}>
        
        <CardMedia
        component="img"
        height="90%"
        style={{
            borderRadius: '50%', // Makes the image round
            width: '90%', // Adjust the width to match the height if needed
            height: '90%', // Ensure the height is consistent
            objectFit: 'cover', // Ensure the image covers the whole area
          }}

        image={img1}
        alt="Paella dish"
      />
    
        <ListItemText
          primary="Driver"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'block' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               contact : 7057722778 
              </Typography>
              {"random"}
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
      
      
    </Grid>
    </Box>
  );
}
