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
import table from "../images/table.png";
import blogcard from "../images/blogcard.png";
import bloglarge from "../images/bloglarge.png";
import sub from "../images/sub.png";
import inputemail from "../images/inputemail.png";
import contact from "../images/contact.png";


function Errornot() {
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
          justifyContent: 'center',
          textAlign:"center",
           width: { xs: '90%', md: '70%', lg: '50%' },
        }}>
          <Typography
                sx={{
                  color: "#0328EE",
                  fontSize: { xs: "180px", md: "100px", lg: "90px" },
                  fontWeight: "bold"
                }}
          >
            404
          </Typography>

      <Typography  sx={{color:"white", fontSize:"42px", fontWeight:"bold"}}>
        Page Not Found
      </Typography>
      <Typography  sx={{color:"white"}}>
        The page you're looking for can't be found. Double-check the URL and try again. Or click the button below.
      </Typography>
       <Box sx={{ justifyContent: "center", margin:"auto",  padding: "10px",flexWrap:"wrap", gap:"10px"}}>
            <Button
              sx={{
                backgroundColor: "rgba(43, 33, 154, 1)",
                color: "white",
                width: "150px",
                borderRadius: "30px",
                fontSize: "12px",
                height: "56px",
                padding: "10px 20px",
                marginTop:"2%"
              }}
            >
              Go Home
            </Button>
        <Button
          sx={{
            backgroundColor: "rgba(71, 64, 64, 1)",
            color: "white",
            width: "150px",
            borderRadius: "30px",
            fontSize: "12px",
            height: "56px",
            padding: "10px 20px",
            padding:"10px",
            marginTop:"2%"
          }}
        >
            View Pricing
        </Button>
    </Box>
     </Box>


      <Footer/>
    </Box>


  );   
}

export default Errornot;
