import Header from "../componenets/Header";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import widescreen from "../images/widescreen.png";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Footer from "../componenets/Footer";
import aboutone from "../images/aboutone.png";
import abouttwo from "../images/abouttwo.png";
import aboutthree from "../images/aboutthree.png";
import aboutfour from "../images/aboutfour.png";
import planet from "../images/planet.png";
import point from "../images/point.png";
import Divider from '@mui/material/Divider';
import tone from "../images/tone.png"
import ttwo from "../images/ttwo.png"
import tthree from "../images/tthree.png"




function About() {
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
           marginBottom:"20px"
        }}>
      <Typography  sx={{color:"white", fontSize:"40px", fontWeight:"bold"}}>
        About Finance Flow
      </Typography>
      <Typography  sx={{color:"white"}}>
        ALorem ipsum dolor sit amet, consectetur adipiscing elit.  Dis placerat. Scelerisque imperdiet vitae dolor non aliquam. Malesuada.
      </Typography>
  </Box>
 <Box sx={{ margin: 'auto',
          justifyContent: { xs: 'left', md: 'center' },
          textAlign:{ xs: 'left', md: 'center' },
           width: { xs: '90%', md: '70%', lg: '50%' },
            marginBottom:"20px"
        }}>
      <Typography  sx={{color:"white", fontSize:"40px", fontWeight:"bold"}}>
        What drives Finance Flow?
      </Typography>
      <Typography  sx={{color:"white"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
      </Typography>
  </Box>

       
      <Box sx={{display:"flex", flexWrap:"wrap", width:"70%", justifyContent:"center", gap:"20px", margin:"auto", flexWrap:"wrap"}}>

        <Box sx={{height:"182px", width:"360px", backgroundColor:"#010D50", borderRadius:"35px"}}>
        <Box sx={{width:"280px", marginTop:"10%", marginLeft:"8%"}}>
            
            <Box sx={{marginTop:"7%", display:"flex", gap:"20px"}}>
              <img
               src={aboutone}
               style={{width:"58px", height:"58px"}}
               />
               <Box sx={{width:"200px",}}>
               <Typography sx={{fontSize:"16px",  marginTop:"2%", color:"white", fontWeight:"700"}}>
                 Open Source
               </Typography>
               <Typography sx={{ color:"white", fontSize:"12px", lineHieght:"32px"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.
            </Typography>
               </Box>
            </Box>  
            </Box>

        </Box>

        <Box sx={{height:"182px", width:"360px", backgroundColor:"rgba(10, 30, 136, 1)", borderRadius:"35px"}}>
        <Box sx={{width:"280px", marginTop:"10%", marginLeft:"8%"}}>
            
            <Box sx={{marginTop:"7%", display:"flex", gap:"20px"}}>
              <img
               src={abouttwo}
               style={{width:"58px", height:"58px"}}
               />
               <Box sx={{width:"200px",}}>
               <Typography sx={{fontSize:"16px",  marginTop:"2%", color:"white", fontWeight:"700"}}>
                 Open Source
               </Typography>
               <Typography sx={{ color:"white", fontSize:"12px", lineHieght:"32px"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.
            </Typography>
               </Box>
            </Box>  
            </Box>

        </Box>

       <Box sx={{height:"182px", width:"360px", backgroundColor:"#0328EE", borderRadius:"35px"}}>
        <Box sx={{width:"280px", marginTop:"10%", marginLeft:"8%"}}>
            
            <Box sx={{marginTop:"7%", display:"flex", gap:"20px"}}>
              <img
               src={aboutthree}
               style={{width:"58px", height:"58px"}}
               />
               <Box sx={{width:"200px",}}>
               <Typography sx={{fontSize:"16px",  marginTop:"2%", color:"white", fontWeight:"700"}}>
                 Open Source
               </Typography>
               <Typography sx={{ color:"white", fontSize:"12px", lineHieght:"32px"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.
            </Typography>
               </Box>
            </Box>  
            </Box>

        </Box>

        <Box sx={{height:"182px", width:"360px", backgroundColor:"#010D50", borderRadius:"35px"}}>
        <Box sx={{width:"280px", marginTop:"10%", marginLeft:"8%"}}>
        
            <Box sx={{marginTop:"7%", display:"flex", gap:"20px"}}>
               <img
               src={aboutfour}
               style={{width:"58px", height:"58px"}}
               />
               <Box sx={{width:"200px",}}>
               <Typography sx={{fontSize:"16px",  marginTop:"2%", color:"white", fontWeight:"700"}}>
                 Open Source
               </Typography>
               <Typography sx={{ color:"white", fontSize:"12px", lineHieght:"32px"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.
            </Typography>
               </Box>
            </Box> 
           </Box>
        </Box>      
      </Box>




      <Box sx={{display:"flex", flexWrap:"wrap", gap:"20px", justifyContent:"space-around", backgroundColor:"#010D50", marginTop:"7%"}}>

        <Box sx={{ width: { xs: '100%', md: '360px' }, borderRadius:"35px", backgroundColor:"transparent"}}>
            
            <Box sx={{marginTop:"7%", marginLeft:{ xs: '1%', md: '10%' }, width: { xs: '100%', md: '400px' }, gap:"20px"}}>
               <Typography sx={{fontSize:"20px", fontFamily:"monospace",  marginTop:"2%", color:"white", fontWeight:"900"}}>
                 Our mission
               </Typography>
               <Typography sx={{ color:"white", fontSize:"12px", lineHieght:"32px"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
            </Typography>
            <Typography sx={{ color:"white", fontSize:"12px",  lineHieght:"32px", marginTop:"5%"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
            </Typography>
            </Box>

            <Box sx={{marginTop:"7%", marginLeft:{ xs: '1%', md: '10%' },  width: { xs: '100%', md: '400px' }, gap:"20px"}}>
               <Typography sx={{fontSize:"20px", fontFamily:"monospace",  marginTop:"2%", color:"white", fontWeight:"900"}}>
                 Our story
               </Typography>
               <Typography sx={{ color:"white", fontSize:"12px", lineHieght:"32px"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
            </Typography>
            <Typography sx={{ color:"white", fontSize:"12px", lineHieght:"32px", marginTop:"5%"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
            </Typography>
            </Box>
      </Box>
        <img
          src={planet}
          style={{width:"400px", height:"400px"}}
        />
      </Box>


         <Box sx={{display:"flex", flexWrap:"wrap", gap:"20px", justifyContent:"space-around", backgroundColor:"#010D50", marginTop:"7%"}}>

        <Box sx={{width:"360px",borderRadius:"35px", backgroundColor:"transparent"}}>
            
            <Box sx={{marginTop:"7%", marginLeft:"10%", width:"302px", gap:"20px"}}>
               <Typography sx={{fontSize:"20px", fontFamily:"monospace",  marginTop:"2%", color:"white", fontWeight:"900"}}>
                Timeline
               </Typography>
               <Typography sx={{ color:"white", fontSize:"12px", lineHieght:"32px"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
            </Typography>
            </Box>
      </Box>
      <Box>
        <Box sx={{ width:"400px", gap:"20px", display:'flex'}}>
          
              <Box sx={{gap:"20px", marginTop:"3%"}}>
                <img
               src={point}
               sx={{width:"20px", height:"20px", justifyContent:"space-around"}}
               />
              </Box>
               <Box>
                <Typography sx={{fontSize:"20px", fontFamily:"monospace",  marginTop:"2%", color:"white", fontWeight:"900"}}>
                 2014
               </Typography>
               
                <Typography sx={{fontSize:"17px", fontFamily:"monospace",  marginTop:"2%", color:"white", fontWeight:"900"}}>
                 Announcement
               </Typography>
            <Typography sx={{ color:"white", fontSize:"12px", lineHieght:"32px", marginTop:"5%"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.
            </Typography>
             <Divider style={{
                background: 'white',   
                height: '1px',       
                margin: '16px auto',
                marginTop:"10%",
            }}/>
            </Box>
            </Box>

              <Box sx={{ width:"400px", gap:"20px", display:'flex'}}>
          
              <Box sx={{gap:"20px", marginTop:"3%"}}>
                <img
               src={point}
               sx={{width:"20px", height:"20px", justifyContent:"space-around"}}
               />
              </Box>
               <Box>
                <Typography sx={{fontSize:"20px", fontFamily:"monospace",  marginTop:"2%", color:"white", fontWeight:"900"}}>
                 2014
               </Typography>
               
                <Typography sx={{fontSize:"17px", fontFamily:"monospace",  marginTop:"2%", color:"white", fontWeight:"900"}}>
                 Announcement
               </Typography>
            <Typography sx={{ color:"white", fontSize:"12px", lineHieght:"32px", marginTop:"5%"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.
            </Typography>
             <Divider style={{
                background: 'white',   
                height: '1px',       
                margin: '16px auto',
                marginTop:"10%",
            }}/>
            </Box>
            </Box>

              <Box sx={{ width:"400px", gap:"20px", display:'flex'}}>
          
              <Box sx={{gap:"20px", marginTop:"3%"}}>
                <img
               src={point}
               sx={{width:"20px", height:"20px", justifyContent:"space-around"}}
               />
              </Box>
               <Box>
                <Typography sx={{fontSize:"20px", fontFamily:"monospace",  marginTop:"2%", color:"white", fontWeight:"900"}}>
                 2016
               </Typography>
               
                <Typography sx={{fontSize:"17px", fontFamily:"monospace",  marginTop:"2%", color:"white", fontWeight:"900"}}>
                 Announcement
               </Typography>
            <Typography sx={{ color:"white", fontSize:"12px", lineHieght:"32px", marginTop:"5%"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.
            </Typography>
             <Divider style={{
                background: 'white',   
                height: '1px',       
                margin: '16px auto',
                marginTop:"10%",
            }}/>
            </Box>
            </Box>

              <Box sx={{ width:"400px", gap:"20px", display:'flex'}}>
          
              <Box sx={{gap:"20px", marginTop:"3%"}}>
                <img
               src={point}
               sx={{width:"20px", height:"20px", justifyContent:"space-around"}}
               />
              </Box>
               <Box>
                <Typography sx={{fontSize:"20px", fontFamily:"monospace",  marginTop:"2%", color:"white", fontWeight:"900"}}>
                 2018
               </Typography>
               
                <Typography sx={{fontSize:"17px", fontFamily:"monospace",  marginTop:"2%", color:"white", fontWeight:"900"}}>
                 Announcement
               </Typography>
            <Typography sx={{ color:"white", fontSize:"12px", lineHieght:"32px", marginTop:"5%"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.
            </Typography>
             <Divider style={{
                background: 'white',   
                height: '1px',       
                margin: '16px auto',
                marginTop:"10%",
            }}/>
            </Box>
            </Box>

              <Box sx={{ width:"400px", gap:"20px", display:'flex'}}>
          
              <Box sx={{gap:"20px", marginTop:"3%"}}>
                <img
               src={point}
               sx={{width:"20px", height:"20px", justifyContent:"space-around"}}
               />
              </Box>
               <Box>
                <Typography sx={{fontSize:"20px", fontFamily:"monospace",  marginTop:"2%", color:"white", fontWeight:"900"}}>
                 2023
               </Typography>
               
                <Typography sx={{fontSize:"17px", fontFamily:"monospace",  marginTop:"2%", color:"white", fontWeight:"900"}}>
                 Announcement
               </Typography>
            <Typography sx={{ color:"white", fontSize:"12px", lineHieght:"32px", marginTop:"5%"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.
            </Typography>
             <Divider style={{
                background: 'white',   
                height: '1px',       
                margin: '16px auto',
                marginTop:"10%",
            }}/>
            </Box>
            </Box>
            </Box>
      </Box>

     <Box sx={{height:"70px", width:'100%', marginTop:"5%", display:"flex", marginBottom:"30px", flexWrap:"wrap", justifyContent:"space-around"}}>
        <Typography sx={{fontSize:"32px", color:"white"}}>

            Our Team
        </Typography>
         
          <Typography sx={{ width: { xs: '50%', md: '30%', lg: '30%' }, fontSize:"16px", color:"white"}}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies.
          </Typography>
      </Box>

      <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"space-around", gap:"15px", marginTop:"3%"}}>

        <img
          src={tone}
          style={{width:"210px", height:"338px"}}
        />

        <img
          src={ttwo}
          style={{width:"204px", height:"328px"}}
        />

        <img
          src={tthree}
          style={{width:"210px", height:"338px"}}
        />

      </Box>

       <Box
  maxWidth="xl"
  sx={{
    bgcolor: "transparent",
    maxWidth: "90%",
    padding: "40px",
    margin: "auto",
    justifyContent: "space-between",
    alignItems: "center",
    height: { xs: "auto", md: "99px" }, 
    flexDirection: { xs: "column", md: "row" },
    textAlign: { xs: "center", md: "left" }, 
  }}
>
 <Typography
  sx={{
    color: "white",
    margin: "auto",
    justifyContent: "center",
    fontWeight: "lighter",
    fontSize: "35px",
    alignItems: "center",
    textAlign: "center",

  }}
>
  Investors
</Typography>
 <Typography
  sx={{
    color: "white",
    margin: "auto",
    justifyContent: "center",
    fontWeight: "lighter",
    fontSize: "12px",
    alignItems: "center",
    textAlign: "center",
    width: { xs: '50%', md: '20%', lg: '20%' }
   

  }}
>
  FLorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies.
</Typography>

  <Box
    sx={{
      display: "flex",
      flexWrap:"wrap",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      justifyContent: { xs: "center", md: "space-around" }, 
      marginTop:"5%"
    }}
  >
    <Typography sx={{ color: "white", margin: { xs: "5px", md: 0 } }}>
      Adams Co.
    </Typography>
    <Typography sx={{ color: "white", margin: { xs: "5px", md: 0 } }}>
      Berbs
    </Typography>
    <Typography sx={{ color: "white", margin: { xs: "5px", md: 0 } }}>
      Eko Market
    </Typography>
    <Typography sx={{ color: "white", margin: { xs: "5px", md: 0 } }}>
      Jerbs
    </Typography>
        <Typography sx={{ color: "white", margin: { xs: "5px", md: 0 } }}>
      Babicons
    </Typography>
        <Typography sx={{ color: "white", margin: { xs: "5px", md: 0 } }}>
      JigMinners
    </Typography>
  </Box>
</Box>



  <Footer/>
    </Box>

  );   
}

export default About;
