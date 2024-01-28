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
import TextField from '@mui/material/TextField';


function Contact() {
  return (
    <Box sx={{
      width: '90%',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor:"transparent"
}}>
  <Header/>

    <Typography sx={{color:"white", fontSize:{ xs: '30px', md: '66px' }, fontFamily:"monospace", fontWeight:"700"}}>
      Get in touch
    </Typography>
      <Container sx={{
        bgcolor: "transparent",
        flexWrap: "wrap",
        maxWidth: "100%",
        padding: "40px",
        display: "flex",
        justifyContent:"space-around"
      
      }}>
      
      
       <Box sx={{display:"flex", flexWrap:"wrap"}}>

        <Box sx={{ minWidth: 50, justifyContent: "space-around", display: "flex", flexWrap:"wrap" }}>
      <Card sx={{ bgcolor: "transparent",  boxShadow: "none", margin: "10px", display:"flex", flexWrap:"wrap",  width:"70%" }}>
        <form style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
          <Box sx={{ height: "106px", display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <Typography variant="subtitle1" sx={{ marginBottom: 1, color:"white" }}>
              Name
            </Typography>
             <TextField
            required
            id="outlined-required"
            label="Name"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor:"#010D50",
              '& label.Mui-focused': {
                color: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'white', 
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', 
                },
                '&:hover fieldset': {
                  borderColor: 'blue', 
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white', 
                },
              },
            }}
          />
          </Box>

                  <Box sx={{ height: "106px", display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <Typography variant="subtitle1" sx={{ marginBottom: 1, color:"white" }}>
              Email
            </Typography>
             <TextField
            required
            id="outlined-required"
            label="Email"
            variant="outlined"
            fullWidth
            sx={{
              '& label.Mui-focused': {
                color: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'white', 
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'blue',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white', 
                },
              },
            }}
          />
          </Box>

                  <Box sx={{ height: "106px", display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <Typography variant="subtitle1" sx={{ marginBottom: 1, color:"white" }}>
              Company
            </Typography>
             <TextField
            required
            id="outlined-required"
            label="Company"
            variant="outlined"
            fullWidth
            sx={{
              '& label.Mui-focused': {
                color: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'white', 
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', 
                },
                '&:hover fieldset': {
                  borderColor: 'blue', 
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
            }}
          />
          </Box>

            <Box sx={{ height: "106px", display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <Typography variant="subtitle1" sx={{ marginBottom: 1, color:"white" }}>
              Subject
            </Typography>
             <TextField
            required
            id="outlined-required"
            label="Subject"
            variant="outlined"
            fullWidth
            sx={{
              '& label.Mui-focused': {
                color: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'white', 
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', 
                },
                '&:hover fieldset': {
                  borderColor: 'blue', 
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
            }}
          />
          </Box>

          <Box sx={{width:"100%"}}>
           <Typography variant="subtitle1" sx={{ marginBottom: 1, color:"white" }}>
              YOUR MESSAGE
            </Typography>
            <TextField
            required
            id="outlined-required"
            label="MESSAGE"
            multiline
            rows={4}
            fullWidth
            sx={{
              marginTop:"5%",
              '& label.Mui-focused': {
                color: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'white', 
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', 
                },
                '&:hover fieldset': {
                  borderColor: 'blue', 
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
            }}
          />
          </Box>
        
           <Button
            sx={{backgroundColor:"rgba(43, 33, 154, 1)", marginTop:"5%", color:"white", width:"100%", borderRadius:"5px", size:"16px", height:"56px", padding:"27px 37px 20px 37px"}}
            >SEND MESSAGE</Button>
        </form>
      </Card>


        <Box sx={{ minWidth: 50, justifyContent:"space-around",marginTop:"-5%"}}>
                  <Card sx={{ bgcolor:"transparent", boxShadow:"none", borderRadius:"40px", margin:"10px"}}>
                  <Typography sx={{ fontSize:"30px", fontWeight:"bold", color:"white", textAlign:"left", marginTop:"10%", marginLeft:"5%", marginRight:"20%"}}>
                    Want to reach us directly?
                  </Typography>
                  <Typography sx={{ marginLeft:"5%", fontSize:"15px", width:"60%", color:"white", textAlign:"left", marginTop:"5%"}}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas.
                  </Typography>
                   </Card>
                   <Box>
                   <Box sx={{display:"flex", height:"70px", marginLeft:"5%"}}>
                    <img
                      src={contact} 
                      alt=""
                      style={{
                        width: '46px',  
                        height: '46px',
                      }}
                    />
                  <Typography sx={{ fontSize:"15px", fontWeight:"bold", color:"white", textAlign:"left", margin:"5px 5px 5px 5px", marginLeft:"5%"}}>
                     contact@FinanceFlow.com
                  </Typography>
                  </Box>
                  <Box sx={{display:"flex", height:"70px", marginLeft:"5%"}}>
                    <img
                      src={contact} 
                      alt="div"
                      style={{
                       width: '46px',  
                        height: '46px',
                      }}
                    />
                  <Typography sx={{ fontSize:"15px", fontWeight:"bold", color:"white", textAlign:"left", margin:"5px 5px 5px 5px", marginLeft:"5%"}}>
                    support@FinanceFlow.com
                  </Typography>
                  </Box>
                  <Box sx={{display:"flex", height:"70px", marginLeft:"5%"}}>
                    <img
                      src={contact} 
                      alt="div"
                      style={{
                        width: '46px',  
                        height: '46px',
                      }}
                    />
                    <Typography sx={{ fontSize:"15px", fontWeight:"bold", color:"white", textAlign:"left", margin:"5px 5px 5px 5px", marginLeft:"5%"}}>
                    press@FinanceFlow.com
                  </Typography>
                  </Box>
               </Box>
           </Box>
    </Box>

       
       </Box>

       

    </Container>   


  <Footer/>
    </Box>

  );   
}

export default Contact;
