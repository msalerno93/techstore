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
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

import EditModal from "../../components/modals/EditModal";
import AddModal from "../../components/modals/AddModal";

type Product = { id: number; name: string; price: string; unit: string };

export default function ProductsPage() {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  // Dummy data for now
  const products = [
    { id: 1, name: "Wireless Mouse", price: "$25.00", unit: "Each" },
    { id: 2, name: "Mechanical Keyboard", price: "$89.99", unit: "Each" },
    { id: 3, name: "USB-C Cable", price: "$9.99", unit: "Each" },
  ];

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
              <TableCell><strong>Product ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Price</strong></TableCell>
              <TableCell><strong>Unit</strong></TableCell>
              <TableCell align="right"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.id}</TableCell>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.price}</TableCell>
                <TableCell>{p.unit}</TableCell>

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

      {/* Add Modal */}
      <AddModal
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onSave={(newProduct) => {
          console.log("Add product:", newProduct);
          setOpenAdd(false);
        }}
      />

      {/* Edit Modal */}
      <EditModal
        open={openEdit}
        product={selectedProduct}
        onClose={() => setOpenEdit(false)}
        onSave={(updatedProduct) => {
          console.log("Updated product:", updatedProduct);
          setOpenEdit(false);
        }}
      />

      {/* Delete Modal */}
      <Dialog open={openDelete} onClose={() => setOpenDelete(false)} fullWidth maxWidth="xs">
        <DialogTitle sx={{ textAlign: "center", fontWeight: "bold", color: "#0a2a43" }}>
          Are you sure?
        </DialogTitle>

        <DialogContent sx={{ textAlign: "center", color: "#0a2a43" }}>
          Are you sure you want to delete this product?
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center" }}>
          <Button onClick={() => setOpenDelete(false)}>Cancel</Button>

          <Button
            variant="contained"
            sx={{ backgroundColor: "#920305" }}
            onClick={() => {
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
