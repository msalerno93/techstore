import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import TechImage from "./assets/tech-image.png"
import './index.css';

function App() {
  const image = TechImage;

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      {/* NAVBAR */}
      <AppBar position="static" sx={{ background: "rgba(0,0,0,0.7)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Tech Store
          </Typography>

          <Box>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/products">Products</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}

export default App;
