import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Fade } from '@mui/material';

import logo from '../img/molecule.png';


export default function Face() {
  const theme = useTheme();
  return (  
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:{xs:'wrap',sm:'no-wrap'}}}>
        <img src={logo} className="logo" alt="logo" />
        <Box sx={{padding:'2vh 2vw'}}>
            <Fade in={true}>
                <Typography gutterBottom variant="h4" component="div" color="#000000" 
                            sx={{textAlign:'right', fontSize:{xs:'1.8rem',sm:'1.7rem',md:'2.2rem'}}}>
                    Konstantinos Zelianeos
                </Typography>
            </Fade>
            <Typography gutterBottom variant="h5" component="div" color={theme.palette.primary.main} 
                        sx={{textAlign:'right', fontSize:{xs:'1.1rem',sm:'1.2rem',md:'1.3rem'}}}>
                Chemical Engineer NTUA<br/>
                Natural Products UoA
            </Typography>
        </Box>       
    </Box>     
  );
}