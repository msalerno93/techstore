import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function ProductsPage() {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  const [selectedProduct, setSelectedProduct] = useState({
    id: 0,
    name: "",
    price: "",
    unit: "",
  });

  // Dummy data for now
  const products = [
    { id: 1, name: "Wireless Mouse", price: "$25.00", unit: "Each" },
    { id: 2, name: "Mechanical Keyboard", price: "$89.99", unit: "Each" },
    { id: 3, name: "USB-C Cable", price: "$9.99", unit: "Each" },
  ];

  type Product = { id: number; name: string; price: string; unit: string };

  const handleEditClick = (product: Product) => {
    setSelectedProduct(product);
    setOpenEdit(true);
  };

  return (
    <Box
      sx={{
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 6,
        color: "white",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        Products
      </Typography>

      {/* Add Product Button */}
      <Button
        variant="contained"
        size="large"
        onClick={() => setOpenAdd(true)}
        sx={{
          backgroundColor: "#0a2a43",
          fontWeight: "bold",
          borderRadius: "12px",
          px: 4,
          py: 1.5,
          mb: 4,
          "&:hover": {
            backgroundColor: "#0d3554",
          },
        }}
      >
        Add Product
      </Button>

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          width: "80%",
          maxWidth: "900px",
          backgroundColor: "rgba(255,255,255,0.9)",
          borderRadius: "12px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Product ID</strong>
              </TableCell>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Price</strong>
              </TableCell>
              <TableCell>
                <strong>Unit</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.id}</TableCell>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.price}</TableCell>
                <TableCell>{p.unit}</TableCell>

                {/* Action Icons */}
                <TableCell align="right">
                  <IconButton onClick={() => handleEditClick(p)}>
                    <EditIcon sx={{ color: "#0a2a43" }} />
                  </IconButton>

                  <IconButton
                    onClick={() => {
                      setProductToDelete(p);
                      setOpenDelete(true);
                    }}
                  >
                    <DeleteIcon sx={{ color: "darkred" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Product Modal */}
      <Dialog
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <TextField label="Product Name" fullWidth margin="normal" />
          <TextField label="Price" fullWidth margin="normal" />
          <TextField label="Unit" fullWidth margin="normal" />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenAdd(false)}>Cancel</Button>
          <Button variant="contained" sx={{ backgroundColor: "#0a2a43" }}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Product Modal */}
      <Dialog
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Product Name"
            fullWidth
            margin="normal"
            defaultValue={selectedProduct.name}
          />
          <TextField
            label="Price"
            fullWidth
            margin="normal"
            defaultValue={selectedProduct.price}
          />
          <TextField
            label="Unit"
            fullWidth
            margin="normal"
            defaultValue={selectedProduct.unit}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
          <Button variant="contained" sx={{ backgroundColor: "#0a2a43" }}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          sx: {
            borderRadius: "12px",
            backgroundColor: "rgba(255,255,255,0.95)",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: "bold",
            color: "#0a2a43",
            textAlign: "center",
          }}
        >
          Are you sure?
        </DialogTitle>

        <DialogContent
          sx={{
            textAlign: "center",
            fontSize: "1.1rem",
            color: "#0a2a43",
            pb: 1,
          }}
        >
          Are you sure you want to delete this product?
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button
            onClick={() => setOpenDelete(false)}
            sx={{
              fontWeight: "bold",
              borderRadius: "12px",
              px: 3,
              py: 1,
              color: "#0a2a43",
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#920305",
              fontWeight: "bold",
              borderRadius: "12px",
              px: 3,
              py: 1,
              "&:hover": {
                backgroundColor: "#ad0909",
              },
            }}
            onClick={() => {
              // You will replace this with your real delete logic later
              console.log("Deleting product:", productToDelete);
              setOpenDelete(false);
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
