import Header from "../componenets/Header";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import widescreen from "../images/widescreen.png";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import pwidescreen from "../images/pwidescreen.png";
import divone from "../images/divone.png";
import divtwo from "../images/divtwo.png";
import divthree from "../images/divthree.png";
import divfour from "../images/divfour.png";
import mpwidescreen from "../images/mpwidescreen.png";
import smallscreen from "../images/smallscreen.png";
import edivone from "../images/edivone.png";
import edivtwo from "../images/edivtwo.png";
import edivthree from "../images/edivthree.png";
import seone from "../images/seone.png";
import setwo from "../images/setwo.png";
import sethree from "../images/sethree.png";
import cimgone from "../images/cimgone.png";
import cimgtwo from "../images/cimgtwo.png";
import video from "../images/video.png";
import download from "../images/download.png";
import pro from "../images/pro.png";
import money from "../images/money.png";
import blogcard from "../images/blogcard.png";
import ios from "../images/ios.png";
import play from "../images/play.png";
import andriod from "../images/andriod.png";
import Footer from "../componenets/Footer";

function Home() {
  return (
    <Box sx={{
      width: '90%',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor:"transparent"
}}>
     <Header/>
      <Container sx={{
        bgcolor: "transparent",
        flexWrap: "wrap",
        maxWidth: "100%",
        padding: "40px",
        display: "flex",
      
      }}>
        <Box sx={{ bgcolor:"transparent", maxWidth:"80%"} }>
            <Typography sx={{fontSize:"40px", color:"white", fontWeight:"bold", fontFamily:"monospace", width:"80%"}}>
                Buy, trade, and hold 350+ cryptocurrencies
            </Typography>
             <Typography sx={{fontSize:"18px", color:"white", width:"50%"}}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.
            </Typography>
          <Box sx={{ justifyContent: "space-around", padding: "10px" }}>
            <Button
              sx={{
                backgroundColor: "rgba(43, 33, 154, 1)",
                color: "white",
                width: "150px",
                borderRadius: "30px",
                fontSize: "12px",
                height: "56px",
                padding: "10px 20px",

              }}
            >
              Download App
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
            marginLeft:"20px"
          }}
        >
            View Pricing
        </Button>
    </Box>
        </Box>
      
     <Box sx={{ maxWidth: '10%',  }}>
  <img
    src={widescreen}
    alt="Logo"
    style={{
      width: '500px',
      height: '330px',
      marginLeft: '-180px',
      display: { xs: 'none', md: 'flex' },
    }}
  />
</Box>

      </Container>
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
    fontSize: "12px",
    alignItems: "center",
    textAlign: "center",

  }}
>
  Finance flow has been featured on
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

  <Container sx={{ padding: "20px",  color: "white",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",}}>
        <Box sx={{ padding: "20px",}}>
          <Typography  sx={{fontSize:"35px"}}>
              Build your crypto portfolio
          </Typography>
          <Typography  sx={{fontSize:"15px", fontWeight:"lighter", width:"50%", justifyContent:"center", textAlign:"center", margin:"auto"}}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aen
          </Typography>

    <Container sx={{
      width: '90%',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor:"transparent",
      display:"flex"

}}>
              <Box sx={{ minWidth: 50, justifyContent:"space-around" }}>
                  <Card sx={{height:"200px", width:"200px", bgcolor:"#010D50", borderRadius:"40px", margin:"10px"}}>
                      
                   <img
                    src={divone} 
                    alt="div"
                    style={{
                      marginTop:"20%",
                      width: '68px',  
                      height: '68px',
                      marginLeft: '10%',  
                      marginRight: 'auto',   
                      display: 'block', 
                    }}
                  />


                    <Typography sx={{color:"white", textAlign:"left", marginLeft:"10%"}}>
                        Send & Receive
                    </Typography>
                    
                    <Typography sx={{fontSize:"12px", textAlign:"left", fontWeight:"lighter", fontSize:"11px", color:"white", marginLeft:"10%"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                    </Typography>
                    <
                   /Card>
                   <Card sx={{height:"200px", width:"200px", bgcolor:"#010D50", borderRadius:"40px", margin:"10px"}}>
                      
                   <img
                    src={divtwo} 
                    alt="div"
                    style={{
                      marginTop:"20%",
                      width: '68px',  
                      height: '68px',
                      marginLeft: '10%',  
                      marginRight: 'auto',   
                      display: 'block', 
                    }}
                  />


                    <Typography sx={{color:"white", textAlign:"left", marginLeft:"10%"}}>
                        100% Secure Wallet
                    </Typography>
                    
                    <Typography sx={{fontSize:"12px", textAlign:"left", fontWeight:"lighter", fontSize:"11px", color:"white", marginLeft:"10%"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                    </Typography>
                    <
                   /Card>

             </Box>
              <Box sx={{ minWidth: 50, justifyContent:"space-around" }}>
                  <Card sx={{height:"400px", width:"300px", bgcolor:"#0328EE", borderRadius:"40px", margin:"10px"}}>
                  <Typography sx={{color:"white", textAlign:"left", marginTop:"10%", marginLeft:"5%", marginRight:"20%"}}>
                    iOS & Android App
                  </Typography>
                  <Typography sx={{ marginLeft:"5%", fontSize:"10px", color:"white", textAlign:"left", marginTop:"5%"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet, morbi non at sed neque.
                  </Typography>
                    <img 
                      src={pwidescreen}
                      style={{width:"254px", marginTop:"5%"}}
                    />
                   </Card>
             </Box>
             <Box sx={{ minWidth: 50, justifyContent:"space-around" }}>
                   <Card sx={{height:"200px", width:"200px", bgcolor:"#010D50", borderRadius:"40px", margin:"10px"}}>
                      
                   <img
                    src={divthree} 
                    alt="div"
                    style={{
                      marginTop:"20%",
                      width: '68px',  
                      height: '68px',
                      marginLeft: '10%',  
                      marginRight: 'auto',   
                      display: 'block', 
                    }}
                  />


                    <Typography sx={{color:"white", textAlign:"left", marginLeft:"10%"}}>
                        Trading Charts
                    </Typography>
                    
                    <Typography sx={{fontSize:"12px", textAlign:"left", fontWeight:"lighter", fontSize:"11px", color:"white", marginLeft:"10%"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                    </Typography>
                    <
                   /Card>
                    <Card sx={{height:"200px", width:"200px", bgcolor:"#010D50", borderRadius:"40px", margin:"10px"}}>
                      
                   <img
                    src={divfour} 
                    alt="div"
                    style={{
                      marginTop:"20%",
                      width: '68px',  
                      height: '68px',
                      marginLeft: '10%',  
                      marginRight: 'auto',   
                      display: 'block', 
                    }}
                  />


                    <Typography sx={{color:"white", textAlign:"left", marginLeft:"10%"}}>
                        Real Time Trading
                    </Typography>
                    
                    <Typography sx={{fontSize:"12px", textAlign:"left", fontWeight:"lighter", fontSize:"11px", color:"white", marginLeft:"10%"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                    </Typography>
                    <
                   /Card>
             </Box>
          </Container>
          <Button
                  sx={{ justifyContent:"center", margin:"auto", backgroundColor:"rgba(43, 33, 154, 1)", color:"white", width:"210px", borderRadius:"30px", size:"16px", height:"56px", padding:"27px 37px 20px 37px",  display: { xs: 'none', md: 'flex' },}}
                  >Download App
          </Button>
   
        </Box>
    </Container>

    <Container sx={{
        bgcolor: "transparent",
        flexWrap: "wrap",
        maxWidth: "100%",
        padding: "40px",
        display: "flex",
        justifyContent:"space-around"
      
      }}>
      
      
        <Box sx={{ minWidth: 50, justifyContent:"space-around" }}>
                  <Card sx={{ bgcolor:"transparent", boxShadow:"none", margin:"10px"}}>
                    <img 
                      src={mpwidescreen}
                      style={{width:"401px", marginTop:"5%"}}
                    />
                   </Card>
             </Box>
             <Box sx={{ minWidth: 50, justifyContent:"space-around", marginTop:"5%"}}>
                  <Card sx={{ bgcolor:"transparent", boxShadow:"none", borderRadius:"40px", margin:"10px"}}>
                  <Typography sx={{ fontSize:"30px", fontWeight:"bold", color:"white", textAlign:"left", marginTop:"10%", marginLeft:"5%", marginRight:"20%"}}>
                    Earn daily rewards on your idle tokens
                  </Typography>
                  <Typography sx={{ marginLeft:"5%", fontSize:"15px", color:"white", textAlign:"left", marginTop:"5%"}}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                  </Typography>
                   </Card>
                   <Box>
                   <Box sx={{display:"flex", height:"70px", marginLeft:"5%"}}>
                    <img
                      src={edivone} 
                      alt="Logo"
                      style={{
                        width: '46px',  
                        height: '46px',
                      }}
                    />
                  <Typography sx={{ fontSize:"15px", fontWeight:"bold", color:"white", textAlign:"left", margin:"5px 5px 5px 5px", marginLeft:"5%"}}>
                     Lowest fees in market
                  </Typography>
                  </Box>
                  <Box sx={{display:"flex", height:"70px", marginLeft:"5%"}}>
                    <img
                      src={edivtwo} 
                      alt="div"
                      style={{
                       width: '46px',  
                        height: '46px',
                      }}
                    />
                  <Typography sx={{ fontSize:"15px", fontWeight:"bold", color:"white", textAlign:"left", margin:"5px 5px 5px 5px", marginLeft:"5%"}}>
                    Fast and secure transactions
                  </Typography>
                  </Box>
                  <Box sx={{display:"flex", height:"70px", marginLeft:"5%"}}>
                    <img
                      src={edivthree} 
                      alt="div"
                      style={{
                        width: '46px',  
                        height: '46px',
                      }}
                    />
                    <Typography sx={{ fontSize:"15px", fontWeight:"bold", color:"white", textAlign:"left", margin:"5px 5px 5px 5px", marginLeft:"5%"}}>
                     256-bit secure encryption
                  </Typography>
                  </Box>
                   </Box>
             </Box>
    </Container>   

      <Container sx={{
        bgcolor: "transparent",
        maxWidth: "100%",
        padding: "40px",
        display: "flex",
      }}>
         <Box sx={{ minWidth: 50, justifyContent:"space-around"}}>
                  <Card sx={{ bgcolor:"transparent", boxShadow:"none", borderRadius:"40px", margin:"10px"}}>
                  <Typography sx={{ fontSize:"30px", fontWeight:"bold", color:"white", textAlign:"left", marginTop:"10%", marginLeft:"5%", marginRight:"20%"}}>
                    Earn daily rewards on your idle tokens
                  </Typography>
                  <Typography sx={{ marginLeft:"5%", fontSize:"15px", color:"white", textAlign:"left", marginTop:"5%"}}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                  </Typography>
                   </Card>
                   <Box>
                   <Box sx={{display:"flex", height:"70px", marginLeft:"5%"}}>
                    <img
                      src={seone} 
                      alt="Logo"
                      style={{
                        width: '46px',  
                        height: '46px',
                      }}
                    />
                  <Typography sx={{ fontSize:"15px", fontWeight:"bold", color:"white", textAlign:"left", margin:"5px 5px 5px 5px", marginLeft:"5%"}}>
                    100% Private data
                  </Typography>
                  </Box>
                  <Box sx={{display:"flex", height:"70px", marginLeft:"5%"}}>
                    <img
                      src={setwo} 
                      alt="div"
                      style={{
                       width: '46px',  
                        height: '46px',
                      }}
                    />
                  <Typography sx={{ fontSize:"15px", fontWeight:"bold", color:"white", textAlign:"left", margin:"5px 5px 5px 5px", marginLeft:"5%"}}>
                    99.99% Uptime guarantee
                  </Typography>
                  </Box>
                  <Box sx={{display:"flex", height:"70px", marginLeft:"5%"}}>
                    <img
                      src={sethree} 
                      alt="div"
                      style={{
                        width: '46px',  
                        height: '46px',
                      }}
                    />
                    <Typography sx={{ fontSize:"15px", fontWeight:"bold", color:"white", textAlign:"left", margin:"5px 5px 5px 5px", marginLeft:"5%"}}>
                     24/7 Dedicated support
                  </Typography>
                  </Box>
                   </Box>
             </Box>
      
      <Box sx={{ justifyContent:"space-around"}}>
                  <Card sx={{ bgcolor:"transparent", marginLeft:"-260px", boxShadow:"none", margin:"10px"}}>
                    <img 
                      src={smallscreen}
                      style={{width:"601px", height:"390px", marginTop:"5%"}}
                    />
                   </Card>
             </Box>
      </Container> 

      <Box sx={{
        height:"400px",
        backgroundColor:"#0328EE",
        marginTop:"10%"
      }}>

         <Container sx={{
        bgcolor: "transparent",
        maxWidth: "100%",
        padding: "40px",
        display: "flex",

      }}>
         <Box sx={{ justifyContent:"space-around", marginLeft:"10%", width:"500px", height:"100px"}}>
                  <Card sx={{ bgcolor:"transparent", boxShadow:"none", borderRadius:"40px", margin:"10px"}}>
                  <Typography sx={{ fontSize:"30px", fontWeight:"bold", color:"white", textAlign:"left", marginTop:"10%", marginLeft:"5%", marginRight:"20%"}}>
                    Earn daily rewards on your idle tokens
                  </Typography>
                  <Typography sx={{ marginLeft:"5%", fontSize:"15px", color:"white", textAlign:"left", marginTop:"5%"}}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                  </Typography>
                   </Card>
                   <Box>
                     <Box sx={{ justifyContent: "space-around", padding: "10px" }}>
            <Button
              sx={{
                backgroundColor: "white",
                color: "blue",
                fontWeight:"bold",
                width: "150px",
                borderRadius: "30px",
                fontSize: "12px",
                height: "56px",
                padding: "10px 20px",
                marginLeft:"5%"
              }}
            >
              Download App
            </Button>
    </Box>
                   </Box>
             </Box>
      
      <Box sx={{ justifyContent:"space-around", marginTop:"-15%"}}>
                  <Card sx={{ bgcolor:"transparent", marginLeft:"-260px", boxShadow:"none", margin:"10px"}}>
                     <img 
                      src={mpwidescreen}
                      style={{width:"460px"}}
                    />
                   </Card>
             </Box>
      </Container> 
      </Box>

      <Box sx={{height:"70px", width:'100%', marginTop:"5%", display:"flex", justifyContent:"space-around"}}>
        <Typography sx={{fontSize:"32px", color:"white", fontFamily:"monospace"}}>
            What our users say?
        </Typography>
         <Button
            sx={{backgroundColor:"rgba(43, 33, 154, 1)", color:"white", width:"210px", borderRadius:"30px", size:"16px", height:"56px", padding:"27px 37px 20px 37px",  display: { xs: 'none', md: 'flex' },}}
            >Download App
          </Button>
      </Box>


      <Box sx={{display:"flex", flexWrap:"wrap", width:"70%", justifyContent:"center", gap:"20px", margin:"auto", flexWrap:"wrap"}}>

        <Box sx={{height:"222px", width:"360px", backgroundColor:"#010D50", borderRadius:"45px"}}>
        <Box sx={{width:"280px", marginTop:"10%", marginLeft:"8%"}}>
            <Typography sx={{ color:"white", fontSize:"12px", lineHieght:"32px"}}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
            </Typography>
            <Box sx={{marginTop:"7%", display:"flex"}}>
              <img
               src={cimgone}
               style={{width:"58px", height:"58px"}}
               />
               <Box sx={{width:"200px"}}>
               <Typography sx={{fontSize:"16px", marginLeft:"5%", marginTop:"2%", color:"white", fontWeight:"700"}}>
                  John carter
               </Typography>

               <Typography sx={{fontSize:"16px", marginLeft:"5%", marginTop:"2%", color:"white", fontWeight:"400"}}>
                  Role, Company
               </Typography>
               </Box>
            </Box>  
            </Box>

        </Box>

         <Box sx={{height:"222px", width:"360px", backgroundColor:"#0328EE", borderRadius:"45px"}}>
        <Box sx={{width:"280px", marginTop:"10%", marginLeft:"8%"}}>
            <Typography sx={{ color:"white", fontSize:"12px", lineHieght:"32px"}}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
            </Typography>
            <Box sx={{marginTop:"7%", display:"flex"}}>
              <img
               src={cimgtwo}
               style={{width:"58px", height:"58px"}}
               />
               <Box sx={{width:"200px"}}>
               <Typography sx={{fontSize:"16px", marginLeft:"5%", marginTop:"2%", color:"white", fontWeight:"700"}}>
                  John carter
               </Typography>

               <Typography sx={{fontSize:"16px", marginLeft:"5%", marginTop:"2%", color:"white", fontWeight:"400"}}>
                  Role, Company
               </Typography>
               </Box>
            </Box>  
            </Box>
        </Box>

        <Box sx={{height:"222px", width:"360px", backgroundColor:"#010D50", borderRadius:"45px"}}>
        <Box sx={{width:"280px", marginTop:"10%", marginLeft:"8%"}}>
            <Typography sx={{ color:"white", fontSize:"12px", lineHieght:"32px"}}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
            </Typography>
            <Box sx={{marginTop:"7%", display:"flex"}}>
              <img
               src={cimgone}
               style={{width:"58px", height:"58px"}}
               />
               <Box sx={{width:"200px"}}>
               <Typography sx={{fontSize:"16px", marginLeft:"5%", marginTop:"2%", color:"white", fontWeight:"700"}}>
                  John carter
               </Typography>

               <Typography sx={{fontSize:"16px", marginLeft:"5%", marginTop:"2%", color:"white", fontWeight:"400"}}>
                  Role, Company
               </Typography>
               </Box>
            </Box>  
            </Box>
        </Box>
      </Box>

       <Container sx={{
        bgcolor: "transparent",
        maxWidth: "100%",
        padding: "40px",
        display: "flex",
      }}>
         <Box sx={{ minWidth: 50, justifyContent:"space-around"}}>
                  <Card sx={{ bgcolor:"transparent", boxShadow:"none", borderRadius:"40px", margin:"10px"}}>
                  <Typography sx={{ fontSize:"30px", fontWeight:"bold", color:"white", textAlign:"left", marginTop:"10%", marginLeft:"5%", marginRight:"20%"}}>
                    Get started today
                  </Typography>
                  <Typography sx={{ marginLeft:"5%", fontSize:"15px", color:"white", textAlign:"left", marginTop:"5%"}}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                  </Typography>
                   </Card>
                   <Box>
                   <Box sx={{display:"flex", height:"70px", marginLeft:"5%"}}>
                    <img
                      src={download} 
                      alt=""
                      style={{
                        width: '46px',  
                        height: '46px',
                      }}
                    />
                  <Typography sx={{ fontSize:"15px", fontWeight:"bold", color:"white", textAlign:"left", margin:"5px 5px 5px 5px", marginLeft:"5%"}}>
                      Download app
                  </Typography>
                  </Box>
                  <Box sx={{display:"flex", height:"70px", marginLeft:"5%"}}>
                    <img
                      src={pro} 
                      alt="div"
                      style={{
                       width: '46px',  
                        height: '46px',
                      }}
                    />
                  <Typography sx={{ fontSize:"15px", fontWeight:"bold", color:"white", textAlign:"left", margin:"5px 5px 5px 5px", marginLeft:"5%"}}>
                    Create a free account
                  </Typography>
                  </Box>
                  <Box sx={{display:"flex", height:"70px", marginLeft:"5%"}}>
                    <img
                      src={money} 
                      alt="div"
                      style={{
                        width: '46px',  
                        height: '46px',
                      }}
                    />
                    <Typography sx={{ fontSize:"15px", fontWeight:"bold", color:"white", textAlign:"left", margin:"5px 5px 5px 5px", marginLeft:"5%"}}>
                     Start trading
                  </Typography>
                  </Box>
                   </Box>
             </Box>
      
      <Box>
            <img
            src={video}
            sx={{width:"600px", height:"300px"}}
            />
        </Box>
      </Container> 

       <Box sx={{height:"70px", width:'100%', marginTop:"5%", display:"flex", justifyContent:"space-around"}}>
        <Typography sx={{fontSize:"32px", color:"white", fontFamily:"monospace"}}>
            Browse our latest news
        </Typography>
         
          <Typography sx={{width:"40%", fontSize:"16px", color:"white"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet .
          </Typography>
      </Box>
      <Box sx={{height:"552px"}}>
      <Box sx={{ justifyContent:"space-around", display:"flex", flexWrap:"wrap"}}>
          <img
          src={blogcard}
          style={{width:"342px", height:"520px"}}
          />
          <img
          src={blogcard}
          style={{width:"342px", height:"520px"}}
          />
          <img
          src={blogcard}
          style={{width:"342px", height:"520px"}}
          />
      </Box>
      </Box>
       <Button
              sx={{ marginTop:"15%", justifyContent:"center", margin:"auto", backgroundColor:"rgba(71, 64, 64, 1)", color:"white", width:"210px", borderRadius:"30px", fontSize:"13px", height:"56px", padding:"27px 37px 20px 37px",  display: { xs: 'none', md: 'flex' },}}
              >View All Articles
          </Button>

          <Box sx={{height:"70px", width:'100%', marginTop:"5%", display:"flex", justifyContent:"space-around"}}>
        <Typography sx={{fontSize:"32px", color:"white", fontWeight:"bold", fontFamily:"monospace"}}>
            Download our app
        </Typography>
         
          <Typography sx={{width:"40%", fontSize:"16px", color:"white"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet .
          </Typography>
      </Box>

       <Container sx={{ padding: "20px",  color: "white",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",}}>
        <Box sx={{ padding: "20px",}}>

    <Container sx={{
      width: '90%',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor:"transparent",
      display:"flex"

}}>  
              <Box sx={{ minWidth: 50, justifyContent:"space-around" }}>
                  <Card sx={{height:"500px", width:"300px", bgcolor:"rgba(0, 24, 157, 1)", borderRadius:"40px", margin:"10px"}}>
                  <Typography sx={{color:"white", textAlign:"left", marginTop:"10%", marginLeft:"5%", marginRight:"20%"}}>
                    Download for iOS
                  </Typography>
                  <Typography sx={{  width:"80%", marginLeft:"5%", fontSize:"12px", color:"white", textAlign:"left", marginTop:"5%"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis.
                  </Typography>
                   <img
                   src={ios}
                   sx={{marginLeft:"10%", backgroundColor:"rgba(71, 64, 64, 1)", color:"white", width:"190px", borderRadius:"30px", fontSize:"13px", height:"56px", padding:"27px 37px 20px 37px",  display: { xs: 'none', md: 'flex' },}} 
                   />
                    <img 
                      src={pwidescreen}
                      style={{width:"254px", marginTop:"15%"}}
                    />
                   </Card>
             </Box>
             <Box sx={{ minWidth: 50, justifyContent:"space-around" }}>
                  <Card sx={{height:"500px", width:"300px", bgcolor:"rgba(0, 24, 157, 1)", borderRadius:"40px", margin:"10px"}}>
                  <Typography sx={{color:"white", textAlign:"left", marginTop:"10%", marginLeft:"5%", marginRight:"20%"}}>
                   Download for Android
                  </Typography>
                  <Typography sx={{  width:"80%", marginLeft:"5%", fontSize:"12px", color:"white", textAlign:"left", marginTop:"5%"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis.
                  </Typography>
                   <img
                   src={play}
                   sx={{marginLeft:"10%", backgroundColor:"rgba(71, 64, 64, 1)", color:"white", width:"190px", borderRadius:"30px", fontSize:"13px", height:"56px", padding:"27px 37px 20px 37px",  display: { xs: 'none', md: 'flex' },}} 
                   />
                    <img 
                      src={andriod}
                      style={{width:"254px", marginTop:"15%"}}
                    />
                   </Card>
             </Box>
             
          </Container>
          <Button
                  sx={{ justifyContent:"center", margin:"auto", backgroundColor:"rgba(43, 33, 154, 1)", color:"white", width:"210px", borderRadius:"30px", size:"16px", height:"56px", padding:"27px 37px 20px 37px",  display: { xs: 'none', md: 'flex' },}}
                  >Download App
          </Button>
   
        </Box>
    </Container>
    <Footer/>
    </Box>

  );   
}

export default Home;
