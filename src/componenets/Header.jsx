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
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import SideNav from "./SideNav";




function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static"  sx={{ margin:"30px", backgroundColor: 'transparent', boxShadow:"none", padding: "33px, 133px, 33px, 133px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters> 
        <img
              src={logo} 
              alt="Logo"
              style={{
                width: '154px',  
                height: '30px',
                display: { xs: 'none', md: 'flex' },
              }}
            />
            <Box  sx={{
              flexGrow: 1,
             
              display: { xs: 'none', md: 'flex' },
              marginLeft: '50px',
              width: '50%',
  }}>
          <Link to="/" style={{  margin:"10px", textDecoration: 'none', color: 'white', fontSize:"15px" }}>
            HOME
          </Link>
           <Link to="/about" style={{ margin:"10px", textDecoration: 'none', color: 'white', fontSize:"15px" }}>
            ABOUT
          </Link>
          <Link to="/pricing" style={{ margin:"10px", textDecoration: 'none', color: 'white', fontSize:"15px" }}>
            PRICING
        </Link>
         <Link to="/tokens" style={{ margin:"10px", textDecoration: 'none', color: 'white', fontSize:"15px" }}>
            TOKENS
         </Link>
          <Link to="/blog" style={{ margin:"10px", textDecoration: 'none', color: 'white', fontSize:"15px" }}>
            BLOG
          </Link>
          <Link to="/contact" style={{ margin:"10px", textDecoration: 'none', color: 'white', fontSize:"15px" }}>
            CONTACT US
         </Link>
        </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
            sx={{backgroundColor:"rgba(43, 33, 154, 1)", color:"white", width:"210px", borderRadius:"30px", size:"16px", height:"56px", padding:"27px 37px 20px 37px",  display: { xs: 'none', md: 'flex' },}}
            >Download App</Button>
            
            <Box
              sx={{
                position: 'fixed',
                right: '50px',
                top: '40px', 
                zIndex: '1000',
                 display: { xs: 'block', md: 'none' },
              }}
            >
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color:"white", backgroundColor:"blue"}}
            >
               <SideNav/>
            </IconButton>
           
            </Box>
         
          
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;


