import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Box sx={{
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(90deg, rgba(0, 18, 121, 1) 0%, rgba(3, 13, 68, 1) 50%, rgba(0, 6, 38, 1) 100%)',
}}>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>


    </Box>
  );
}

export default App;
