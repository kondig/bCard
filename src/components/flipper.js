import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ZeliaCard from './card';
import ContactDetails from './contact';

export default function FlippingCard() {
    // const theme = useTheme();
    return (
        <Box sx={{ width:{xs:'95vw',sm:'80vw',md:'70vw'} }} className="flip-container">
            <div className="flipper">
                <Box className="front">
                    <ZeliaCard /> 
                </Box>
                <Card sx={{ display:'flex', justifyContent:'center', alignItems:'center' }} className="back">
                    <ContactDetails />
                    {/*<div className="icon-row">
                        <a className="icon-box" href="https://gr.linkedin.com/in/konstantinos-zelianeos" target="_blank">
                            <i className="fa fa-linkedin"></i>
                        </a>                       
                        <a className="icon-box" href="" target="_blank">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a className="icon-box" href="" target="_blank">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className="icon-box" href="" target="_blank">
                            <i className="fa fa-google-plus"></i>
                        </a>
                        
                        <a className="icon-box" href="" target="_blank">
                            <i className="fa fa-codepen"></i>
                        </a>
                        <a className="icon-box" href="" target="_blank">
                            <i className="fa fa-github"></i>
                        </a>
                    </div>*/}              
                </Card>
            </div>
        </Box>
    );
}