import React from 'react'
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import RecipeReviewCard from '../components/servicecard';
import cab from '../images/travelapplogo.jpg'

import xcent from '../images/xcent.jpg'
import pickup from '../images/pickup.jpg'
import innova from '../images/innova.jpg'
import auto from '../images/auto.jpg'
import bolero from '../images/bolero.jpg'



const OurServices = () => {
  return (
    
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          <Grid item xs={2} sm={4} md={4}>
            <RecipeReviewCard  image={cab}/>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <RecipeReviewCard image={xcent}/>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <RecipeReviewCard image={auto}/>
          </Grid>
    
      </Grid>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          <Grid item xs={2} sm={4} md={4}>
            <RecipeReviewCard  image={innova}/>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <RecipeReviewCard image={bolero}/>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <RecipeReviewCard image={pickup}/>
          </Grid>
          

    
      </Grid>
    </Box>
   
    
  )
}

export default OurServices
