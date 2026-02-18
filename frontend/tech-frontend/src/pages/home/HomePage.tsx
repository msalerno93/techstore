import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Box
      sx={{
        height: "calc(100vh - 64px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "0px 0px 10px black",
        flexDirection: "column",
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        Welcome to Tech Store
      </Typography>

      <Typography
        variant="h6"
        sx={{
          maxWidth: "700px",
          mb: 4,
        }}
      >
        Your simple way to manage your tech products. Explore our wide range of
        gadgets and accessories, all in one place. Shop now and experience the
        future of technology!
      </Typography>

      <Button
        variant="contained"
        size="large"
        component={Link}
        to="/products"
        sx={{
          backgroundColor: "#0a2a43", // deep blue tone
          fontWeight: "bold",
          borderRadius: "12px", // rounded edges
          px: 4,
          py: 1.5,
          "&:hover": {
            backgroundColor: "#0d3554", // slightly lighter on hover
          },
        }}
      >
        View Products
      </Button>
    </Box>
  );
}
