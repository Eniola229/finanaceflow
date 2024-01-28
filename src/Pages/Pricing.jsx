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
import tone from "../images/tone.png";
import ttwo from "../images/ttwo.png";
import tthree from "../images/tthree.png";
import send from "../images/send.png";
import trading from "../images/trading.png";
import wallet from "../images/wallet.png";
import real from "../images/real.png";

function Pricing() {
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
        }}>
      <Typography  sx={{color:"white", fontSize:"40px", fontWeight:"bold"}}>
        Pricing
      </Typography>
      <Typography  sx={{color:"white"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque
      </Typography>
  </Box>

  <Box
    sx={{
      display: "flex",
      flexWrap:"wrap",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      justifyContent: { xs: "center", md: "space-around" }, 
      marginTop:"5%",
     marginBottom: "30px"
    }}
  >
<Box sx={{ display: "flex", justifyContent: "space-around", width: "200px" }}>
  <img src={send}
    style={{width:"34px", height:"34px"}}
   />
  <Typography sx={{ color: "white", marginTop: "-5%", gap: "15px", margin: { xs: "5px", md: 0 } }}>
        Send & receive
  </Typography>
</Box>

<Box sx={{ display: "flex", justifyContent: "space-around", width: "200px" }}>
  <img src={trading}
    style={{width:"34px", height:"34px"}}
   />
  <Typography sx={{ color: "white", marginTop: "-5%", gap: "15px", margin: { xs: "5px", md: 0 } }}>
        Trading Charts
  </Typography>
</Box>


<Box sx={{ display: "flex", justifyContent: "space-around", width: "100px" }}>
  <img src={wallet}
    style={{width:"34px", height:"34px"}}
   />
  <Typography sx={{ color: "white", marginTop: "-5%", gap: "15px", margin: { xs: "5px", md: 0 } }}>
        Wallet
  </Typography>
</Box>


<Box sx={{ display: "flex", justifyContent: "space-around", width: "200px" }}>
  <img src={real}
    style={{width:"34px", height:"34px"}}
   />
  <Typography sx={{ color: "white", marginTop: "-5%", gap: "15px", margin: { xs: "5px", md: 0 } }}>
       Real Time Trading
  </Typography>
</Box>

</Box>




       
      <Box sx={{display:"flex", flexWrap:"wrap", marginTop:"15%", width:"70%", justifyContent:"center", gap:"20px", margin:"auto"}}>

        <Box sx={{height:"412px", width:"260px", backgroundColor:"#010D50", borderRadius:"35px"}}>
            <Box sx={{marginTop:"10%", marginLeft:"10%",}}>
              <Button
            sx={{backgroundColor:"#0328EE", fontSize:"12px", color:"white",  width:"63px", height:"27px", borderRadius:"15px", size:"16px", height:"56px", padding:"27px 37px 20px 37px",  display:'flex' }}
            >BASIC</Button>
            <Typography sx={{fontSize:"42px", color:"white", fontWeight:"700"}}>
                $ 100 USD
            </Typography>
             <Typography sx={{fontSize:"12px", color:"white", fontWeight:"700"}}>
               Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.
            </Typography>
        </Box>
        <Box sx={{marginTop:"4%", marginLeft:"10%",}}>
            <Typography sx={{fontSize:"18px", color:"white", fontWeight:"700"}}>
                Features
            </Typography>
             <Typography sx={{fontSize:"12px", color:"white", fontWeight:"400"}}>
               Everything included in Basic
            </Typography>
             <Typography sx={{fontSize:"12px", color:"white", fontWeight:"400"}}>
               Trading up to $1MM per month
            </Typography>
             <Typography sx={{fontSize:"12px", color:"white", fontWeight:"400"}}>
               Windows & macOS App
            </Typography>
             <Typography sx={{fontSize:"12px", color:"white", fontWeight:"400"}}>
              Premium Support
            </Typography>
        </Box>
         <Button
            sx={{backgroundColor:"#0328EE", justifyContent:"center", margin:"auto", marginTop:"10%", color:"white",  width:"220px", height:"70px", borderRadius:"15px", size:"16px", height:"56px", padding:"27px 37px 20px 37px",  display:'flex' ,}}
            >contact us</Button>
        </Box>

        <Box sx={{height:"412px", width:"260px", backgroundColor:"#010D50", borderRadius:"35px"}}>
            <Box sx={{marginTop:"10%", marginLeft:"10%",}}>
              <Button
            sx={{backgroundColor:"#0328EE", fontSize:"12px", color:"white",  width:"63px", height:"27px", borderRadius:"15px", size:"16px", height:"56px", padding:"27px 37px 20px 37px",  display:'flex' }}
            >PRO</Button>
            <Typography sx={{fontSize:"42px", color:"white", fontWeight:"700"}}>
                $ 100 USD
            </Typography>
             <Typography sx={{fontSize:"12px", color:"white", fontWeight:"700"}}>
               Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.
            </Typography>
        </Box>
        <Box sx={{marginTop:"4%", marginLeft:"10%",}}>
            <Typography sx={{fontSize:"18px", color:"white", fontWeight:"700"}}>
                Features
            </Typography>
             <Typography sx={{fontSize:"12px", color:"white", fontWeight:"400"}}>
               Everything included in Basic
            </Typography>
             <Typography sx={{fontSize:"12px", color:"white", fontWeight:"400"}}>
               Trading up to $1MM per month
            </Typography>
             <Typography sx={{fontSize:"12px", color:"white", fontWeight:"400"}}>
               Windows & macOS App
            </Typography>
             <Typography sx={{fontSize:"12px", color:"white", fontWeight:"400"}}>
              Premium Support
            </Typography>
        </Box>
         <Button
            sx={{backgroundColor:"#0328EE", justifyContent:"center", margin:"auto", marginTop:"10%", color:"white",  width:"220px", height:"70px", borderRadius:"15px", size:"16px", height:"56px", padding:"27px 37px 20px 37px",  display:'flex' ,}}
            >contact us</Button>
        </Box>

        <Box sx={{height:"412px", width:"260px", backgroundColor:"#010D50", borderRadius:"35px"}}>
            <Box sx={{marginTop:"10%", marginLeft:"10%",}}>
              <Button
            sx={{backgroundColor:"#0328EE", color:"white", fontSize:"12px", width:"63px", height:"27px", borderRadius:"15px", size:"16px", height:"56px", padding:"27px 37px 20px 37px",  display:'flex' }}
            >EXPERT</Button>
            <Typography sx={{fontSize:"42px", color:"white", fontWeight:"700"}}>
                $ 100 USD
            </Typography>
             <Typography sx={{fontSize:"12px", color:"white", fontWeight:"700"}}>
               Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.
            </Typography>
        </Box>
        <Box sx={{marginTop:"4%", marginLeft:"10%",}}>
            <Typography sx={{fontSize:"18px", color:"white", fontWeight:"700"}}>
                Features
            </Typography>
             <Typography sx={{fontSize:"12px", color:"white", fontWeight:"400"}}>
               Everything included in Basic
            </Typography>
             <Typography sx={{fontSize:"12px", color:"white", fontWeight:"400"}}>
               Trading up to $1MM per month
            </Typography>
             <Typography sx={{fontSize:"12px", color:"white", fontWeight:"400"}}>
               Windows & macOS App
            </Typography>
             <Typography sx={{fontSize:"12px", color:"white", fontWeight:"400"}}>
              Premium Support
            </Typography>
        </Box>
         <Button
            sx={{backgroundColor:"#0328EE", justifyContent:"center", margin:"auto", marginTop:"10%", color:"white",  width:"220px", height:"70px", borderRadius:"15px", size:"16px", height:"56px", padding:"27px 37px 20px 37px",  display:'flex' ,}}
            >contact us</Button>
        </Box>

        </Box>



    


  <Footer/>
    </Box>

  );   
}

export default Pricing;
