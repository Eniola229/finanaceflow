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


function Blog() {
  return (
    <Box sx={{
      width: '90%',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor:"transparent"
}}>
  <Header/>

       <Box sx={{height:"70px", width:'100%', marginTop:"5%", display:"flex", justifyContent:"space-around"}}>
        <Typography sx={{fontSize:"32px", fontWeight:"700", color:"white", fontFamily:"monospace"}}>
            Blog
        </Typography>
         
          <Typography sx={{width:"40%", fontSize:"16px", color:"white"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet .
          </Typography>
      </Box>
      

       <Box sx={{height:"222px", width:"660px", justifyContent:"center", textAlign:"center", margin:"auto", marginBottom:"20px", borderRadius:"35px"}}>
       <img
        src={bloglarge}
        style={{width:"100%", height:"222px"}}
       />
       </Box>


       <Box sx={{height:"288px", backgroundColor:"#0328EE", flexWrap:"wrap", marginBottom:"50px"}}>
          <Box sx={{ justifyContent:"center", gap:"20px", display:"center", flexWrap:"wrap",margin:"auto", alignItems:"center", padding:"60px"}}>
            <img
            src={sub}
            />
            <Typography sx={{color:"white", fontSize:"30px", width:"40%"}}>
              Subscribe to our crypto news weekly newsletter!
            </Typography>
            <img
            src={inputemail}
            style={{marginLeft:"10%"}}
            />
          </Box>
       </Box>

      <Box sx={{height:"70px", width:'100%', marginTop:"5%", display:"flex", justifyContent:"space-around"}}>
        <Typography sx={{fontSize:"32px", fontWeight:"700", color:"white", fontFamily:"monospace"}}>
            Latest Posts
        </Typography>
         
         <Box sx={{display:"flex", justifyContent:"space-around", gap:"10px"}}>
          <Button
            sx={{backgroundColor:"#0328EE", fontSize:"12px", color:"white",  width:"63px", height:"27px", borderRadius:"80px", size:"16px", height:"56px", padding:"27px 37px 20px 37px",  display:'flex' }}
            >All</Button>
             <Button
            sx={{backgroundColor:"#333", fontSize:"12px", color:"white",  width:"63px", height:"27px", borderRadius:"80px", size:"16px", height:"56px", padding:"27px 37px 20px 37px",  display:'flex' }}
            >Apps</Button>
             <Button
            sx={{backgroundColor:"#333", fontSize:"12px", color:"white",  width:"155px", height:"27px", borderRadius:"80px", size:"16px", height:"56px", padding:"27px 37px 20px 37px",  display:'flex' }}
            >Products</Button>
             <Button
            sx={{backgroundColor:"#333", fontSize:"12px", color:"white",  width:"103px", height:"27px", borderRadius:"80px", size:"16px", height:"56px", padding:"27px 37px 20px 37px",  display:'flex' }}
            >Tutotrial</Button>
         </Box>
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
      


    
  <Footer/>
    </Box>

  );   
}

export default Blog;
