import { Box, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Box
      sx={{
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        pt: 8,
        px: 3,
        color: "white",
        textShadow: "0px 0px 10px black",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        About Tech Store
      </Typography>

      {/* Description */}
      <Typography
        variant="h6"
        sx={{
          maxWidth: "800px",
          mb: 5,
          lineHeight: 1.6,
        }}
      >
        Tech Store is a simple and intuitive application designed to help you
        manage your tech products with ease. Whether you're tracking inventory,
        browsing available items, or updating product details, Tech Store keeps
        everything organized in one place. Built with a clean interface and
        modern tools, this application provides a smooth and efficient user
        experience. Our goal is to make managing your tech products effortless
        and enjoyable.
      </Typography>

      {/* Hours of Operation */}
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: 3,
          borderRadius: "12px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Hours of Operation
        </Typography>

        <Typography>Monday: 9:00 AM – 6:00 PM</Typography>
        <Typography>Tuesday: 9:00 AM – 6:00 PM</Typography>
        <Typography>Wednesday: 9:00 AM – 6:00 PM</Typography>
        <Typography>Thursday: 9:00 AM – 6:00 PM</Typography>
        <Typography>Friday: 9:00 AM – 6:00 PM</Typography>
        <Typography>Saturday: 10:00 AM – 4:00 PM</Typography>
        <Typography>Sunday: Closed</Typography>
      </Box>
    </Box>
  );
}
