import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import SideNav from "./SideNav";
import insta from "../images/insta.png";
import facebook from "../images/facebook.png";
import l from "../images/l.png";
import dowapp from "../images/dowapp.png";



function Footer() {
  
  return (

    <Box sx={{
      backgroundColor:"#010D50",
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      gap:"20px"
    }}>

     <Box sx={{
       width:"90%",
       marginTop:"5%",
       margin: 'auto',
       justifyContent: 'center',
       alignItems: 'center',
       gap:"20px"
     }}>

        <Box sx={{height:"70px", marginTop:"5%", padding:"20px", display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
        <img
              src={logo} 
              alt="Logo"
              style={{
                width: '154px',  
                height: '30px',
                display: { xs: 'none', md: 'flex' },
              }}
            />
         
         <Box sx={{justifyContent:"space-around", display:"flex", gap:"15px"}}>
          <img
              src={insta} 
              alt=""
              style={{
                width: '40px',  
                height: '40px',
                display: { xs: 'none', md: 'flex' },
              }}
            />
            <img
              src={facebook} 
              alt=""
              style={{
                width: '40px',  
                height: '40px',
                display: { xs: 'none', md: 'flex' },
              }}
            />
            <img
              src={l} 
              alt=""
              style={{
                width: '40px',  
                height: '40px',
                display: { xs: 'none', md: 'flex' },
              }}
            />
         </Box>
      </Box>
        <Box sx={{display:"flex", flexWrap:"wrap", gap:"5px", justifyContent:"space-around"}}>
          <Box sx={{width:"390px"}}>
            <Typography sx={{color:"white", fontSize:"20px"}}>
                MENU
            </Typography>
            <Divider style={{
                background: 'white',   
                height: '1px',       
                margin: '16px auto',
            }}/>
            <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
             <Box>
              <Typography sx={{color:"white"}}>
                  HOME
              </Typography>
                <Typography sx={{color:"white"}}>
                  PRICING
              </Typography>
               <Typography sx={{color:"white"}}>
                  ABOUT
              </Typography>
             </Box>
             <Box>
              <Typography sx={{color:"white"}}>
                  TOKENS
              </Typography>
                <Typography sx={{color:"white"}}>
                  BLOG
              </Typography>
               <Typography sx={{color:"white"}}>
                  CONTACT US
              </Typography>
             </Box>
            </Box>
          </Box>
           <img
              src={dowapp} 
              alt=""
              style={{
                width: '300px',  
                height: '209px',
                display: { xs: 'none', md: 'flex' },
              }}
            />
        </Box>
        <Divider style={{
                background: 'white',   
                height: '1px',       
                margin: '16px auto',
                marginTop:"10%",
            }}/>
             <Typography sx={{color:"white", fontSize:"15px", padding:"20px"}}>
                  All rights reserved
              </Typography>
     </Box>
    </Box>



  );
}
export default Footer;


