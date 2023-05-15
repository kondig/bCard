import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function ContactDetails() {
    // const theme = useTheme();
    return (
        <Box sx={{display:'flex',justifyContent:'space-around',width:'100%', flexWrap:{xs:'wrap',sm:'no-wrap'}}}>
          <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', flexBasis:{xs:'100%',sm:'50%'},
                      }}>
            <Link href="tel:+306976670733" underline="hover" target="_blank" rel="noopener" color="secondary"
                  sx={{ margin: { xs:'5px 15px', md:'20px'}, display:'flex', alignItems:'center', justifyContent:'flex-start',
                        textDecoration:'none !important',}}>
                <FontAwesomeIcon icon={faPhoneVolume} spin={false} className="icon" style={{ flexBasis:'10%', marginRight:'15px' }} />
                <Typography component={'p'} sx={{ color:'text.secondary', fontSize:{xs:'1rem',md:'1.3rem'} }}>(+30) 6976 670 733</Typography>
            </Link>
            <Link href="mailto:k@zelianeos.com" underline="hover" target="_blank" rel="noopener" color="secondary"
                  sx={{ margin: { xs:'5px 15px', md:'20px'}, display:'flex', alignItems:'center', justifyContent:'flex-start',
                            textDecoration:'none !important',}}>
                <FontAwesomeIcon icon={faEnvelope} spin={false} className="icon" style={{ flexBasis:'10%', marginRight:'15px' }} />
                <Typography component={'p'} sx={{ color:'text.secondary', fontSize:{xs:'1rem',md:'1.3rem'} }}>k@zelianeos.com</Typography>
            </Link>
            <Link href="https://www.zelianaios.com" underline="hover" target="_blank" rel="noopener" color="secondary"
                  sx={{ margin: { xs:'5px 15px', md:'20px'}, display:'flex', alignItems:'center', justifyContent:'flex-start',
                            textDecoration:'none !important',}}>
                <FontAwesomeIcon icon={faGlobe} spin={false} className="icon" style={{ flexBasis:'10%', marginRight:'15px' }} />
                <Typography component={'p'} sx={{ color:'text.secondary', fontSize:{xs:'1rem',md:'1.3rem'} }}>zelianaios.com</Typography>
            </Link>
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center', flexBasis:{xs:'100%',sm:'50%'}, margin:{xs:'5vh 0',sm:'5vh 0'}}}>
            <Typography component={'p'} sx={{ color:'text.secondary', fontSize:{xs:'1rem',md:'1rem'} }}>Contact me via:</Typography>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'baseline',width:'100%'}} >
              <Link href="https://gr.linkedin.com/in/konstantinos-zelianeos" underline="hover" target="_blank" rel="noopener" className="icon-box">
                <LinkedInIcon fontSize={'large'} className="icon" />
              </Link>
              <Tooltip title="my Whatsapp goes here" arrow >
                <Box className="icon-box">
                  <WhatsAppIcon fontSize={'large'} className="icon" />
                </Box>
              </Tooltip>                                     
              <Tooltip title="a telegram account" arrow>
                <Box className="icon-box">
                  <FontAwesomeIcon icon={faTelegram} className="icon" />
                </Box>
              </Tooltip>
              <Tooltip title="and here's the zuckenberg" arrow>
                <Box className="icon-box">
                  <FontAwesomeIcon icon={faFacebookMessenger} className="icon" />
                </Box>
              </Tooltip>
              <Tooltip title="wooot! WeChat" arrow>
                <Box className="icon-box">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="icon">
                        <path fill="#1190a8" d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z"/>
                    </svg>
                </Box>
              </Tooltip>            
            </Box>
          </Box>      
        </Box>
    );
}