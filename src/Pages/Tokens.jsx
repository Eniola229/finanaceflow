import Header from "../componenets/Header";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Footer from "../componenets/Footer";
import Divider from '@mui/material/Divider';
import table from "../images/table.png"


function Tokens() {
  return (
    <Box sx={{
      width: '90%',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor:"transparent"
}}>
  <Header/>

    <Box sx={{ margin: 'auto',
           justifyContent: { xs: 'left', md: 'center' },
          textAlign:{ xs: 'left', md: 'center' },
           width: { xs: '90%', md: '70%', lg: '50%' },
           marginBottom:"30px"
        }}>
      <Typography  sx={{color:"white", fontSize:"40px", fontWeight:"bold"}}>
        Tokens
      </Typography>
      <Typography  sx={{color:"white"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque
      </Typography>
  </Box>

    <Box sx={{ textAlign: 'center' }}>
      <img
        src={table}
        alt="Table"
        style={{ width: '80%', margin: 'auto', display: 'block' }}
      />
    </Box>

  


    

    
  <Footer/>
    </Box>

  );   
}

export default Tokens;
