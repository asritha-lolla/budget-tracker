import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const CustomCard = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start', // Center the card horizontally
        alignItems: 'center',      // Center the card vertically if needed
        height: '30vh',           // Make sure the parent container takes full viewport height
        padding: 1,                // Add some padding around the container
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: 300,               // Set the card width to a smaller value
          boxShadow: 3,             // Add a shadow effect (value between 1 and 24)
          borderRadius: 2,          // Optional: round the card corners
        }}
      >
        {CustomCard}
      </Card>
    </Box>
  );
}
