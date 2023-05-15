import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import ContactDetails from './contact';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Face from './face';

export default function ZeliaCard() {
  // const theme = useTheme();
  return (
    <Card sx={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
      <Face />     
      <CardActions sx={{flexDirection:'column', display:{xs:'flex',sm:'none'}}}>
        <ContactDetails />                              
      </CardActions>
    </Card>
  );
}
